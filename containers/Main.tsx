import { Flex, VStack } from "@chakra-ui/react";
import HijriDateDisplay from "@components/HijriDateDisplay";
import Periodicity from "@components/Periodicity";
import PrayerFooter from "@components/Prayer/PrayerFooter";
import SelectCity from "@components/SelectCity";
import { getHijriDate } from "api/prayers";
import { UseAppContext, setGlobalCity, togglePeriodicity } from "context";
import { getAllCities, getCityName } from "data/cityService";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Daily from "./Daily";
import Monthly from "./Monthly";

const Main = () => {
  const [state, dispatch] = UseAppContext();
  const cities = getAllCities();
  const { city, periodicity } = state;
  const isDaily = periodicity === "DAILY";
  const { data: hijri } = useQuery(["hijri"], () => getHijriDate());

  const handleChange = (city: number) => {
    if (city) {
      dispatch(setGlobalCity(city));
    }
  };

  useEffect(() => {
    const savedCity = localStorage.getItem("city") || 58;
    dispatch(setGlobalCity(Number(savedCity)));
  }, []);

  return (
    <Flex height="100%" direction="column">
      <VStack flexDir="column" spacing={4}>
        <Periodicity
          isDaily={isDaily}
          onClick={() => dispatch(togglePeriodicity())}
        />
        {city && (
          <SelectCity cities={cities} city={city} handleChange={handleChange} />
        )}
        <HijriDateDisplay date={hijri} />
      </VStack>
      {isDaily ? <Daily /> : <Monthly />}
      {city && <PrayerFooter city={getCityName(city)} />}
    </Flex>
  );
};

export default Main;
