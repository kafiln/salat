import { Switch } from "@/components/ui/switch";

const Periodicity = ({
  onClick,
  isDaily,
}: {
  onClick: any;
  isDaily: boolean;
}) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">الحصة الشهرية</span>
      <Switch checked={isDaily} onCheckedChange={onClick} />
      <span className="text-sm font-medium">الأوقات اليوم</span>
    </div>
  );
};

export default Periodicity;
