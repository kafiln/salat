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
    <div
      className={`flex items-center justify-between flex-row-reverse p-2 rounded-sm border-2 border-primary/30 w-full ${isNext ? `${colors.className} font-bold` : ""
        }`}
    >
      <span className="text-sm capitalize">{toArabic(prayer.name)}</span>
      <span className="text-sm">{dayjs(prayer.time).format("HH:mm")}</span>
    </div>
  );
};

export default PrayerItem;
