import { HStack, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { Prayer } from "./PrayerList";

interface PrayerItemProps {
  prayer: Prayer;
  isNext?: boolean;
}
const PrayerItem = ({ prayer, isNext }: PrayerItemProps) => {
  return (
    <HStack
      width="100%"
      p={2}
      border={2}
      borderColor="blue.500"
      rounded="sm"
      justifyContent="space-between"
      {...(isNext && { bgColor: "teal.300" })}
    >
      <Text casing="capitalize">{prayer.name}</Text>
      <Text>{dayjs(prayer.time).format("HH:mm")}</Text>
    </HStack>
  );
};

export default PrayerItem;
