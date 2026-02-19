import { Card, CardContent } from "@/components/ui/card";
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
    <Card className={`w-40 ${colors.className}`}>
      <CardContent className="flex flex-col items-center gap-2 p-6">
        <span className="font-bold capitalize">
          {toArabic(prayer.name)}
        </span>
        <span className="font-bold text-xl">- {remaining}</span>
        <span className="font-bold">{time}</span>
      </CardContent>
    </Card>
  );
};

export default PrayerCard;
