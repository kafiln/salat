import { Center, Flex } from "@chakra-ui/layout";
import {
  Button,
  Container,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { getMonthlyPrayers } from "api/prayers";
import { UseAppContext } from "context";
import { getCityName } from "data/cityService";
import { useRef } from "react";
import { useQuery } from "react-query";
import ReactToPrint from "react-to-print";

const dayIsFriday = (day: string) => day === "الجمعة";

const Monthly = () => {
  // Get data
  const [state] = UseAppContext();
  const { city } = state;

  // Get date from API
  const { data, isLoading } = useQuery(["monthlyPrayers", city], () =>
    getMonthlyPrayers(city)
  );

  const componentRef = useRef();

  return (
    <Flex height="100%" direction="column">
      {isLoading && (
        <Center flex={1}>
          <Spinner size="xl" />
        </Center>
      )}
      {data && (
        <>
          <ReactToPrint
            trigger={() => (
              <Button
                sx={{
                  position: "absolute",
                  right: "0",
                }}
                colorScheme="teal"
                size="sm"
              >
                تحميل
              </Button>
            )}
            // @ts-ignore
            content={() => componentRef.current}
          />
          {/* @ts-ignore */}
          <Container ref={componentRef}>
            <Table size="sm" dir="rtl" borderWidth={1} borderColor={"gray.100"}>
              <TableCaption placement="top" fontSize={"md"}>
                <>
                  {`حصة الصلاة لشهر ${
                    data[0].arabic_month
                  } الخاصة بمدينة ${getCityName(city)}`}
                </>
              </TableCaption>
              <Thead>
                <Tr>
                  {Object.values(data[0]).map((header: any, index: number) => {
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
          {/* </div> */}
        </>
      )}
    </Flex>
  );
};

export default Monthly;
