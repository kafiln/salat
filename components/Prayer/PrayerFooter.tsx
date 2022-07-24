import { Flex, Text } from "@chakra-ui/react";

const PrayerFooter = ({ city }: { city: string }) => {
  return (
    <Flex justifyContent={"center"} alignItems="center" direction={"column"}>
      <Text> مواقيت الصلاة بمدينة {city}</Text>
      <Text fontSize="sm" color={"gray.500"}>
        حسب توقيت وزارة الاوقاف والشؤون الاسلامية بالمغرب
      </Text>
    </Flex>
  );
};

export default PrayerFooter;
