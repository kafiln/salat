import { HStack, Text } from "@chakra-ui/react";
import { useThemedColors } from "@hooks/useInvertColors";
import dayjs from "dayjs";
import { Prayer } from "./PrayerList";

interface PrayerItemProps {
  prayer: Prayer;
  isNext?: boolean;
}

//TODO: replace by i18n
export const toArabic = (name: string) => {
  switch (name) {
    case "fajr":
      return "الفجر";
    case "chorouq":
      return "الشروق ";
    case "dohr":
      return "الظهر";
    case "asr":
      return "العصر";
    case "maghrib":
      return "المغرب";
    case "ishae":
      return "العشاء";
    default:
      return "";
  }
};

const PrayerItem = ({ prayer, isNext }: PrayerItemProps) => {
  const colors = useThemedColors();
  return (
    <HStack
      p={2}
      border={2}
      borderColor="blue.500"
      rounded="sm"
      flexDir="row-reverse"
      justifyContent="space-between"
      width={"100%"}
      {...(isNext && { ...colors, fontWeight: "bold" })}
    >
      <Text fontSize="sm" casing="capitalize">
        {toArabic(prayer.name)}
      </Text>
      <Text fontSize="sm">{dayjs(prayer.time).format("HH:mm")}</Text>
    </HStack>
  );
};

export default PrayerItem;
