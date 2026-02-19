import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useMemo } from "react";

interface City {
  id: number;
  name: string;
}

interface SelectCityProps {
  city: number;
  handleChange: (city: number) => void;
  cities: City[];
}

const SelectCity = ({ cities, city, handleChange }: SelectCityProps) => {
  const options = useMemo(() => {
    return cities
      .map((city) => ({ value: city.id, label: city.name }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [cities]);

  const selectedLabel = options.find((o) => o.value === city)?.label;

  return (
    <div className="min-w-[20rem]" dir="rtl">
      <Select
        value={String(city)}
        onValueChange={(val) => handleChange(Number(val))}
      >
        <SelectTrigger>
          <SelectValue placeholder="اختر المدينة">{selectedLabel}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={String(option.value)}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default React.memo(SelectCity);
