import { Box, Text, VStack } from "@chakra-ui/react";
import { useThemedColors } from "@hooks/useInvertColors";
import { getCityById } from "data/cityService";

interface CityCardProps {
  city: ReturnType<typeof getCityById>;
}

export const CityCard = ({ city }: CityCardProps) => {
  const colors = useThemedColors();
  return (
    <Box width="10rem" p={6} borderRadius={10} {...colors} bgColor={"blue.500"}>
      <VStack>
        <Text fontWeight="bold" casing="capitalize">
          {city.name}
        </Text>
        <Text fontWeight="bold" fontSize="xl">
          {city.latitude} , {city.longitude}
        </Text>
        <Text fontWeight="bold">{city.elevation}</Text>
      </VStack>
    </Box>
  );
};

export default CityCard;
