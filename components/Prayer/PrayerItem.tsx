import { HStack, Text } from "@chakra-ui/react";
import { useThemedColors } from "@hooks/useInvertColors";
import dayjs from "dayjs";
import { Prayer } from "./PrayerList";

interface PrayerItemProps {
  prayer: Prayer;
  isNext?: boolean;
}
const PrayerItem = ({ prayer, isNext }: PrayerItemProps) => {
  const colors = useThemedColors();
  return (
    <HStack
      width="100%"
      p={2}
      border={2}
      borderColor="blue.500"
      rounded="sm"
      justifyContent="space-between"
      {...(isNext && { ...colors, fontWeight: "bold" })}
    >
      <Text fontSize="sm" casing="capitalize">
        {prayer.name}
      </Text>
      <Text fontSize="sm">{dayjs(prayer.time).format("HH:mm")}</Text>
    </HStack>
  );
};

export default PrayerItem;
