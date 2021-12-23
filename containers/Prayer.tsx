import { Center, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import PrayerCard from "@components/Prayer/PrayerCard";
import PrayerList from "@components/Prayer/PrayerList";
import SelectCity from "@components/SelectCity";
import TimeDisplay from "@components/TimeDisplay";
import useTime from "@hooks/useTime";
import { getPrayers } from "api/prayers";
import { UseAppContext } from "context";
import cities from "data/cities.json";
import dayjs from "dayjs";
import React, { useCallback, useState } from "react";
import { useQuery } from "react-query";

const Prayer = () => {
  const [state] = UseAppContext();
  const { city: defaultCity } = state;
  const time = useTime();
  const [city, setCity] = useState(defaultCity);
  const { data: prayers } = useQuery(["prayers", city], () => getPrayers(city));

  let content = (
    <Center flex={1}>
      <Spinner />
    </Center>
  );

  const handleChange = useCallback(
    (city: number) => {
      if (city) {
        setCity(city);
      }
    },
    [setCity]
  );

  if (prayers && prayers.length > 0) {
    const nextPrayers = prayers.filter((prayer: any) => {
      return dayjs(prayer.time).isAfter(time);
    });
    const nextPrayer = nextPrayers.length > 0 ? nextPrayers[0] : prayers[0];
    const remainingTime = dayjs(dayjs(nextPrayer.time).diff(time)).format(
      "HH:mm:ss"
    );
    const formattedTime = time.format("HH:mm");
    content = (
      <VStack spacing={4} paddingY={4}>
        <PrayerCard
          remaining={remainingTime}
          time={formattedTime}
          prayer={nextPrayer}
        />
        <PrayerList prayers={prayers} next={nextPrayer} />
      </VStack>
    );
  }

  return (
    <Flex height="100%" direction="column">
      <VStack flexDir="column" spacing={4}>
        <Heading as="h1">Salati</Heading>
        <Text as="p" size="xs" textAlign="center">
          Your guide to learning prayer times in Morocco
        </Text>
        <SelectCity cities={cities} city={city} handleChange={handleChange} />
        <TimeDisplay time={time.format("MMMM D, YYYY")} />
      </VStack>
      {content}
    </Flex>
  );
};

export default Prayer;
