import { Text } from "@chakra-ui/react";
import React from "react";

const HijriDateDisplay = ({ date }: { date: string }) => {
  return <Text fontSize="xl">{date}</Text>;
};

export default React.memo(HijriDateDisplay);
