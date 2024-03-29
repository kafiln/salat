import { VStack } from "@chakra-ui/layout";
import { Dayjs } from "dayjs";
import PrayerItem from "./PrayerItem";

interface PrayerListProps {
  prayers: Prayer[];
  next: Prayer;
}

export interface Prayer {
  name: string;
  time: Dayjs;
}

const PrayerList = ({ prayers, next }: PrayerListProps) => {
  return (
    <VStack minW={"10rem"}>
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
