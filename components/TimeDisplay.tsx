import { Text } from "@chakra-ui/react";

const TimeDisplay = ({ time }: { time: string }) => {
  return <Text fontSize="xl">{time}</Text>;
};

export default TimeDisplay;
