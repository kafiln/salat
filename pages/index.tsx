import Prayer from "containers/Prayer";
import DefaultLayout from "Layout";
import type { NextPage } from "next";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const Home: NextPage = () => {
  const queryClient = new QueryClient();
  return (
    <DefaultLayout>
      <QueryClientProvider client={queryClient}>
        <Prayer />
      </QueryClientProvider>
    </DefaultLayout>
  );
};

export default Home;
