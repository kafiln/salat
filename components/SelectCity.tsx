import { Box } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
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
    return cities.map((city) => ({ value: city.id, label: city.name }));
  }, [cities]);

  return (
    <Box minW={"20rem"} dir="rtl">
      <Select
        // size={"lg"}
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
    </Box>
  );
};

export default React.memo(SelectCity);
