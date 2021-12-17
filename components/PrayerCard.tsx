import { Box, VStack, Text } from "@chakra-ui/react";
import { Prayer } from "./PrayerList";

interface PrayerCardProps {
  time: string;
  remaining: string;
  prayer: Prayer;
}

export const PrayerCard = ({ time, prayer, remaining }: PrayerCardProps) => {
  return (
    <Box py={6} px={6} bgColor="blue.300" color="white" borderRadius={10}>
      <VStack>
        <Text fontWeight="bold">{time}</Text>
        <Text fontWeight="bold" casing="capitalize">
          {prayer.name}
        </Text>
        <Text fontWeight="bold">-{remaining}</Text>
      </VStack>
    </Box>
  );
};

export default PrayerCard;
