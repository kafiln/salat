import { Center, Flex, VStack } from "@chakra-ui/layout";
import {
  Container,
  Spacer,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import HijriDateDisplay from "@components/HijriDateDisplay";
import SelectCity from "@components/SelectCity";
import { getHijriDate, getMonthlyPrayers } from "api/prayers";
import { UseAppContext } from "context";
import { getAllCities, getCityName } from "data/cityService";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";

const dayIsFriday = (day: string) => day === "الجمعة";
const isToday = (day: string, hijriDay: number) => day === hijriDay.toString();

const Monthly = () => {
  // Get data
  const [state] = UseAppContext();
  const cities = getAllCities();
  const { city: defaultCity } = state;
  const [city, setCity] = useState(defaultCity);

  // Get date from API
  const { data, isLoading } = useQuery(["monthlyPrayers", city], () =>
    getMonthlyPrayers(city)
  );
  const { data: hijri } = useQuery(["hijri"], () => getHijriDate());
  const [_, hirjiDay, HijriMonth, ...rest] = (hijri || "").split(" ");

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
        <SelectCity cities={cities} city={city} handleChange={handleChange} />
        <HijriDateDisplay date={hijri} />
      </VStack>
      {isLoading && (
        <Center flex={1}>
          <Spinner size="xl" />
        </Center>
      )}
      {data && hijri && (
        <>
          <Spacer my={2} />
          <Container>
            <TableContainer>
              <Table size="sm" borderColor={"gray.400"}>
                <TableCaption>
                  حصة الصلاة {data[0].arabic_month} الخاصة بمدينة{" "}
                  {getCityName(city)}
                </TableCaption>
                <Thead>
                  <Tr>
                    {Object.values(data[0])
                      .reverse()
                      .map((header: any, index: number) => {
                        return (
                          <Th bgColor="gray.300" key={index}>
                            {header}
                          </Th>
                        );
                      })}
                  </Tr>
                </Thead>
                <Tbody>
                  {data.slice(1).map((row: any, index: number) => {
                    return (
                      <Tr
                        key={index}
                        {...(dayIsFriday(row.day_name) && {
                          bgColor: "gray.100",
                        })}
                        {...(isToday(row.arabic_month, hirjiDay) && {
                          fontWeight: "bold",
                        })}
                      >
                        {Object.values(row)
                          .reverse()
                          .map((cell: any, index: number) => {
                            return <Td key={index}>{cell}</Td>;
                          })}
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Container>
        </>
      )}
    </Flex>
  );
};

export default Monthly;
