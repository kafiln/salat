import { VStack } from "@chakra-ui/layout";
import { Center, Flex, HStack, Spinner } from "@chakra-ui/react";
import PrayerCard from "@components/Prayer/PrayerCard";
import PrayerList, { Prayer } from "@components/Prayer/PrayerList";
import useTime from "@hooks/useTime";
import { CalculationParameters, Coordinates, PrayerTimes } from "adhan";
import { getPrayers } from "client/prayers";
import { UseAppContext } from "context";
import { getCityById } from "data/cityService";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import { useQuery } from "react-query";

dayjs.extend(utc);

const calculatePrayersForCity = (city: number): Prayer[] => {
  const { latitude, longitude } = getCityById(city);
  const coordinates = new Coordinates(latitude, longitude);
  let params = new CalculationParameters("Other", 19.1, 17);
  // params.methodAdjustments = {
  //   ...params.methodAdjustments,
  //   dhuhr: 5,
  //   maghrib: 7,
  // };
  const date = new Date();
  const prayerTimes = new PrayerTimes(coordinates, date, params);
  return [
    {
      name: "fajr",
      time: dayjs(prayerTimes.fajr),
    },
    {
      name: "chorouq",
      time: dayjs(prayerTimes.sunrise),
    },
    {
      name: "dohr",
      time: dayjs(prayerTimes.dhuhr),
    },
    {
      name: "asr",
      time: dayjs(prayerTimes.asr),
    },
    {
      name: "maghrib",
      time: dayjs(prayerTimes.maghrib),
    },
    {
      name: "ishae",
      time: dayjs(prayerTimes.isha),
    },
  ];
};

const getPrayerInfo = (prayers: Prayer[] | undefined, time: Dayjs) => {
  if (!prayers) return { remainingTime: "", nextPrayer: null };
  const followingPrayers = prayers.filter((prayer: Prayer) => {
    return dayjs(prayer.time).isAfter(time);
  });
  const nextPrayer =
    followingPrayers.length > 0
      ? followingPrayers[0]
      : { ...prayers[0], time: prayers[0].time.add(1, "day") };
  const remainingTime = dayjs(dayjs(nextPrayer.time).diff(time))
    .utc()
    .format("HH:mm:ss");

  return {
    remainingTime,
    nextPrayer,
  };
};

const Daily = () => {
  // Hooks
  const time = useTime();

  // Get data
  const [state] = UseAppContext();
  const { city } = state;

  // Get date from API
  const { data: prayers, isLoading } = useQuery(
    ["prayers", city],
    () => getPrayers(Number(city)),
    {
      enabled: Boolean(city),
    }
  );

  const { remainingTime, nextPrayer } = getPrayerInfo(prayers, time);

  return (
    <Flex height="100%" direction="column">
      {isLoading && (
        <Center flex={1}>
          <Spinner size="xl" />
        </Center>
      )}

      {prayers && prayers.length > 0 && nextPrayer && (
        <VStack spacing={4} paddingY={4}>
          <PrayerCard
            remaining={remainingTime}
            time={time.format("HH:mm")}
            prayer={nextPrayer}
          />
          <HStack>
            <PrayerList prayers={prayers} next={nextPrayer} />
            {city && (
              <PrayerList
                bgColor="red.100"
                prayers={calculatePrayersForCity(city)}
                next={nextPrayer}
              />
            )}
          </HStack>
        </VStack>
      )}
    </Flex>
  );
};

export default Daily;
