import { HStack, Switch, Text } from "@chakra-ui/react";

const Periodicity = ({
  onClick,
  isDaily,
}: {
  onClick: any;
  isDaily: boolean;
}) => {
  return (
    <HStack>
      <Text>الحصة الشهرية</Text>
      <Switch isChecked={isDaily} onChange={onClick} />
      <Text>الأوقات اليوم</Text>
    </HStack>
  );
};

export default Periodicity;
