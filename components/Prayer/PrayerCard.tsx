import { Box, Text, VStack } from "@chakra-ui/react";
import { useThemedColors } from "@hooks/useInvertColors";
import { toArabic } from "./PrayerItem";
import { Prayer } from "./PrayerList";

interface PrayerCardProps {
  time: string;
  remaining: string;
  prayer: Prayer;
}

export const PrayerCard = ({ time, prayer, remaining }: PrayerCardProps) => {
  const colors = useThemedColors();
  return (
    <Box width="10rem" p={6} borderRadius={10} {...colors}>
      <VStack>
        <Text fontWeight="bold" casing="capitalize">
          {toArabic(prayer.name)}
        </Text>
        <Text fontWeight="bold" fontSize="xl">
          - {remaining}
        </Text>
        <Text fontWeight="bold">{time}</Text>
      </VStack>
    </Box>
  );
};

export default PrayerCard;
