import { ChakraProvider } from "@chakra-ui/react";
import { AppState, LocalProvider } from "context";
import type { AppProps } from "next/app";
import React from "react";

const initialState: AppState = {
  city: 80,
  language: "ar",
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <LocalProvider initialState={initialState}>
        <Component {...pageProps} />
      </LocalProvider>
    </ChakraProvider>
  );
};

export default MyApp;
