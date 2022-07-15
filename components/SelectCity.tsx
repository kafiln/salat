import React, { useMemo } from "react";
import Select from "react-select";

interface City {
  id: number;
  name: string;
}

interface SelectCityProps {
  city: number;
  handleChange: (city: number) => void;
  cities: City[];
}

const customStyles = {
  container: (provided: any, state: any) => ({
    ...provided,
    minWidth: "10rem",
    direction: "rtl",
  }),
};

const SelectCity = ({ cities, city, handleChange }: SelectCityProps) => {
  const options = useMemo(() => {
    return cities.map((city) => ({ value: city.id, label: city.name }));
  }, [cities]);

  return (
    <Select
      options={options}
      styles={customStyles}
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
