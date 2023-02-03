import { Flex, VStack } from "@chakra-ui/react";
import HijriDateDisplay from "@components/HijriDateDisplay";
import PrayerFooter from "@components/Prayer/PrayerFooter";
import SelectCity from "@components/SelectCity";
import { getHijriDate } from "api/prayers";
import { setGlobalCity, UseAppContext } from "context";
import { getAllCities, getCityName } from "data/cityService";
import { useQuery } from "react-query";
import Daily from "./Daily";

const Main = () => {
  const [state, dispatch] = UseAppContext();
  const cities = getAllCities();
  const { city } = state;
  const { data: hijri } = useQuery(["hijri"], () => getHijriDate());

  const handleChange = (city: number) => {
    if (city) {
      dispatch(setGlobalCity(city));
    }
  };

  return (
    <Flex height="100%" direction="column">
      <VStack flexDir="column" spacing={4}>
        <SelectCity cities={cities} city={city} handleChange={handleChange} />
        <HijriDateDisplay date={hijri} />
      </VStack>
      <Daily />
      <PrayerFooter city={getCityName(city)} />
    </Flex>
  );
};

export default Main;
