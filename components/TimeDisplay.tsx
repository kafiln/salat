import { Text } from "@chakra-ui/react";
import React from "react";

const TimeDisplay = ({ time }: { time: string }) => {
  return <Text fontSize="sm">{time}</Text>;
};

export default TimeDisplay;
