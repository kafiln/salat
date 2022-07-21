import { Box, Flex } from "@chakra-ui/layout";
import { ReactElement } from "react";

const DefaultLayout = ({
  children,
  header,
  footer,
}: {
  children: any;
  header: ReactElement;
  footer: ReactElement;
}) => {
  return (
    <Flex
      gap={4}
      justifyContent="space-between"
      direction="column"
      height="100vh"
    >
      {header}
      <Box py={2} flex={1}>
        {children}
      </Box>
      {footer}
    </Flex>
  );
};

export default DefaultLayout;
