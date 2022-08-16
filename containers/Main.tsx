import { Flex, VStack } from "@chakra-ui/react";
import HijriDateDisplay from "@components/HijriDateDisplay";
import Periodicity from "@components/Periodicity";
import SelectCity from "@components/SelectCity";
import { getHijriDate } from "api/prayers";
import {
  setGlobalCity,
  togglePeriodicity,
  UseAppContext,
  useAppDispatch,
  usePeriodicity,
} from "context";
import { getAllCities } from "data/cityService";
import { useQuery } from "react-query";
import Daily from "./Daily";
import Monthly from "./Monthly";

const Main = () => {
  const [state] = UseAppContext();
  const cities = getAllCities();
  const { city } = state;
  const dispatch = useAppDispatch();

  const { data: hijri } = useQuery(["hijri"], () => getHijriDate());

  const isDaily = usePeriodicity() === "DAILY";

  const handleChange = (city: number) => {
    if (city) {
      dispatch(setGlobalCity(city));
    }
  };

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
