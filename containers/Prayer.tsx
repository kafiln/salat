import { Center, Flex, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import HijriDateDisplay from "@components/HijriDateDisplay";
import PrayerCard from "@components/Prayer/PrayerCard";
import PrayerFooter from "@components/Prayer/PrayerFooter";
import PrayerList from "@components/Prayer/PrayerList";
import SelectCity from "@components/SelectCity";
import useTime from "@hooks/useTime";
import { getHijriDate, getPrayers } from "api/prayers";
import { UseAppContext } from "context";
import cities from "data/cities.json";
import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";

const getCityName = (city: number) => {
  const cityName = cities.find((c) => c.id === city);
  return cityName ? cityName.name : "";
};

const Prayer = () => {
  const [state] = UseAppContext();
  // const toast = useToast();
  // const id = "test-toast";

  const { city: defaultCity } = state;
  const time = useTime();
  const [city, setCity] = useState(defaultCity);
  const { data: prayers } = useQuery(["prayers", city], () => getPrayers(city));
  const { data: hijri } = useQuery(["hijri"], () => getHijriDate());

  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }, []);

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

    //TODO: add notification
    if (remainingTime === "00:00:00") {
      const description = `${nextPrayer.name} is now`;
      // console.log(description);
      // if (!toast.isActive(id)) {
      //   toast({
      //     title: "Prayer Time",
      //     description,
      //     status: "success",
      //     duration: 9000,
      //     isClosable: true,
      //   });
      // }
      new Notification("Salati", {
        body: description,
      });
    }
    const formattedTime = time.format("HH:mm");
    content = (
      <VStack spacing={4} paddingY={4}>
        <PrayerCard
          remaining={remainingTime}
          time={formattedTime}
          prayer={nextPrayer}
        />
        <PrayerList prayers={prayers} next={nextPrayer} />
        <PrayerFooter city={getCityName(city)} />
      </VStack>
    );
  }

  return (
    <Flex height="100%" direction="column">
      <VStack flexDir="column" spacing={4}>
        <SelectCity cities={cities} city={city} handleChange={handleChange} />
        <HijriDateDisplay date={hijri} />
      </VStack>
      {content}
    </Flex>
  );
};

export default Prayer;
