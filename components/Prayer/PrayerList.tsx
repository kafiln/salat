import { VStack } from "@chakra-ui/layout";
import { Dayjs } from "dayjs";
import PrayerItem from "./PrayerItem";

interface PrayerListProps {
  prayers: Prayer[];
  next: Prayer;
  bgColor?: string;
}

export interface Prayer {
  name: "fajr" | "chorouq" | "dohr" | "asr" | "maghrib" | "ishae";
  time: Dayjs;
}

const PrayerList = ({ prayers, next, bgColor }: PrayerListProps) => {
  return (
    <VStack minW={"10rem"} bgColor={bgColor}>
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
