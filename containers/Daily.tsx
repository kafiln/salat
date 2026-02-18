import { VStack } from "@chakra-ui/layout";
import { Center, Flex, Spinner } from "@chakra-ui/react";
import PrayerCard from "@components/Prayer/PrayerCard";
import PrayerList, { Prayer } from "@components/Prayer/PrayerList";
import useTime from "@hooks/useTime";
import { UseAppContext } from "context";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import { useQuery } from "react-query";
import { getPrayers } from "services/api";

dayjs.extend(utc);

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
            time={nextPrayer.time.format("HH:mm")}
            prayer={nextPrayer}
          />
          <PrayerList prayers={prayers} next={nextPrayer} />
        </VStack>
      )}
    </Flex>
  );
};

export default Daily;
