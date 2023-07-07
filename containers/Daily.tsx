import { VStack } from "@chakra-ui/layout";
import { Center, Flex, Spinner } from "@chakra-ui/react";
import PrayerCard from "@components/Prayer/PrayerCard";
import PrayerList from "@components/Prayer/PrayerList";
import useNotificationsPermission from "@hooks/useNotificationsPermission";
import useTime from "@hooks/useTime";
import { getPrayers } from "api/prayers";
import { UseAppContext } from "context";
import dayjs from "dayjs";
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

const Daily = () => {
  // Hooks
  useNotificationsPermission();
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

      {prayers && prayers.length > 0 && (
        <VStack spacing={4} paddingY={4}>
          <PrayerCard
            remaining={remainingTime}
            time={time.format("HH:mm")}
            prayer={nextPrayer}
          />
          <PrayerList prayers={prayers} next={nextPrayer} />
        </VStack>
      )}
    </Flex>
  );
};

export default Daily;
