import { Center, Flex } from "@chakra-ui/layout";
import {
  Button,
  Container,
  Spacer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { getHijriDate, getMonthlyPrayers } from "api/prayers";
import { UseAppContext } from "context";
import { getCityName } from "data/cityService";
import { useRef, useState } from "react";
import { useQuery } from "react-query";
import ReactToPrint from "react-to-print";

const dayIsFriday = (day: string) => day === "الجمعة";
const isToday = (day: string, hijriDay: number) => day === hijriDay.toString();

const Monthly = () => {
  // Get data
  const [state] = UseAppContext();
  const { city: defaultCity } = state;
  const [city, setCity] = useState(defaultCity);

  // Get date from API
  const { data, isLoading } = useQuery(["monthlyPrayers", city], () =>
    getMonthlyPrayers(city)
  );
  const { data: hijri } = useQuery(["hijri"], () => getHijriDate());
  const [_, hirjiDay, HijriMonth, ...rest] = (hijri || "").split(" ");

  const componentRef = useRef();

  return (
    <Flex height="100%" direction="column">
      {isLoading && (
        <Center flex={1}>
          <Spinner size="xl" />
        </Center>
      )}
      {data && hijri && (
        <>
          <ReactToPrint
            trigger={() => <Button>Print </Button>}
            content={() => componentRef.current}
          />
          <div ref={componentRef}>
            <Spacer my={2} />
            <Container>
              <Table size="sm" borderColor={"gray.400"} dir="rtl">
                <TableCaption>
                  حصة الصلاة {data[0].arabic_month} الخاصة بمدينة{" "}
                  {getCityName(city)}
                </TableCaption>
                <Thead>
                  <Tr>
                    {Object.values(data[0]).map(
                      (header: any, index: number) => {
                        return (
                          <Th bgColor="gray.300" key={index}>
                            {header}
                          </Th>
                        );
                      }
                    )}
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
                        {Object.values(row).map((cell: any, index: number) => {
                          return <Td key={index}>{cell}</Td>;
                        })}
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Container>
          </div>
        </>
      )}
    </Flex>
  );
};

export default Monthly;
