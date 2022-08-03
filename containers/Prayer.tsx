import { Center, Flex, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import HijriDateDisplay from "@components/HijriDateDisplay";
import PrayerCard from "@components/Prayer/PrayerCard";
import PrayerFooter from "@components/Prayer/PrayerFooter";
import PrayerList from "@components/Prayer/PrayerList";
import SelectCity from "@components/SelectCity";
import useNotificationsPermission from "@hooks/useNotificationsPermission";
import useTime from "@hooks/useTime";
import { getHijriDate, getPrayers } from "api/prayers";
import { UseAppContext } from "context";
import { getAllCities, getCityName } from "data/cityService";
import dayjs from "dayjs";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";

const getPrayerInfo = (prayers: any, time: any) => {
  if (!prayers) return { remainingTime: "", nextPrayer: null };
  const nextPrayers = prayers.filter((prayer: any) => {
    return dayjs(prayer.time).isAfter(time);
  });
  const nextPrayer = nextPrayers.length > 0 ? nextPrayers[0] : prayers[0];
  const remainingTime = dayjs(dayjs(nextPrayer.time).diff(time)).format(
    "HH:mm:ss"
  );

  return {
    remainingTime,
    nextPrayer,
  };
};

const Prayer = () => {
  // Hooks
  useNotificationsPermission();
  const time = useTime();

  // Get data
  const [state] = UseAppContext();
  const cities = getAllCities();
  const { city: defaultCity } = state;
  const [city, setCity] = useState(defaultCity);

  // Get date from API
  const { data: prayers, isLoading } = useQuery(["prayers", city], () =>
    getPrayers(city)
  );
  const { data: hijri } = useQuery(["hijri"], () => getHijriDate());

  const handleChange = useCallback(
    (city: number) => {
      if (city) {
        setCity(city);
      }
    },
    [setCity]
  );

  const { remainingTime, nextPrayer } = getPrayerInfo(prayers, time);

  return (
    <Flex height="100%" direction="column">
      <VStack flexDir="column" spacing={4}>
        <SelectCity cities={cities} city={city} handleChange={handleChange} />
        <HijriDateDisplay date={hijri} />
      </VStack>
      {isLoading && (
        <Center flex={1}>
          <Spinner size="xl" />
        </Center>
      )}

      {prayers && prayers.length > 0 && (
        <VStack spacing={4} paddingY={4}>
          <PrayerCard
            remaining={remainingTime}
            time={time.format("HH:mm")}
            prayer={nextPrayer}
          />
          <PrayerList prayers={prayers} next={nextPrayer} />
          <PrayerFooter city={getCityName(city)} />
        </VStack>
      )}
    </Flex>
  );
};

export default Prayer;
