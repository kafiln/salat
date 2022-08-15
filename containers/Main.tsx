import { Flex, VStack } from "@chakra-ui/react";
import HijriDateDisplay from "@components/HijriDateDisplay";
import Periodicity from "@components/Periodicity";
import SelectCity from "@components/SelectCity";
import { getHijriDate } from "api/prayers";
import {
  togglePeriodicity,
  UseAppContext,
  useAppDispatch,
  usePeriodicity,
} from "context";
import { getAllCities } from "data/cityService";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import Daily from "./Daily";
import Monthly from "./Monthly";

const Main = () => {
  const [state] = UseAppContext();
  const cities = getAllCities();
  const { city: defaultCity } = state;
  const [city, setCity] = useState(defaultCity);
  const dispatch = useAppDispatch();

  const { data: hijri } = useQuery(["hijri"], () => getHijriDate());
  //   const [_, hirjiDay, HijriMonth, ...rest] = (hijri || "").split(" ");

  const isDaily = usePeriodicity() === "DAILY";

  const handleChange = useCallback(
    (city: number) => {
      if (city) {
        setCity(city);
      }
    },
    [setCity]
  );

  return (
    <Flex height="100%" direction="column">
      <VStack flexDir="column" spacing={4}>
        <Periodicity
          isDaily={isDaily}
          onClick={() => dispatch(togglePeriodicity())}
        />
        <SelectCity cities={cities} city={city} handleChange={handleChange} />
        <HijriDateDisplay date={hijri} />
      </VStack>
      {isDaily ? <Daily /> : <Monthly />}
    </Flex>
  );
};

export default Main;
