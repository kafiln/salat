import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";
import { AppState, LocalProvider } from "context";
import type { AppProps } from "next/app";
import theme from "theme";

const initialState: AppState = {
  city: 58,
  language: "ar",
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <LocalProvider initialState={initialState}>
        <Component {...pageProps} />
      </LocalProvider>
    </ChakraProvider>
  );
};

export default MyApp;
