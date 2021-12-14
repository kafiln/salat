import React, { useMemo } from "react";
import Select from "react-select";

interface City {
  id: number;
  name: string;
}

interface SelectCityProps {
  cities: City[];
  city: number;
  handleChange: (city: number) => void;
}

const SelectCity = ({ cities, city, handleChange }: SelectCityProps) => {
  const options = useMemo(() => {
    return cities.map((city) => ({ value: city.id, label: city.name }));
  }, [cities]);

  return (
    <Select
      options={options}
      instanceId="test"
      value={options.find((option: any) => option.value === city)}
      onChange={(item) => {
        const city = item?.value;
        if (city) {
          handleChange(city);
        }
      }}
    />
  );
};

export default React.memo(SelectCity);
