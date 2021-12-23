import { Box, HStack, VStack, Text } from "@chakra-ui/layout";
import dayjs from "dayjs";
import React from "react";
import PrayerItem from "./PrayerItem";

interface PrayerListProps {
  prayers: Prayer[];
  next: Prayer;
}

export interface Prayer {
  name: string;
  time: string;
}

const PrayerList = ({ prayers, next }: PrayerListProps) => {
  return (
    <VStack spacing={1}>
      {prayers.map((prayer, key: number) => (
        <PrayerItem
          key={key}
          prayer={prayer}
          isNext={prayer.name === next.name}
        />
      ))}
    </VStack>
  );
};

export default PrayerList;
