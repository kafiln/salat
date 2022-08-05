import Footer from "@components/Footer";
import Header from "@components/Header";
import Monthly from "containers/Monthly";
import DefaultLayout from "Layout";
import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "react-query";

const Home: NextPage = () => {
  const queryClient = new QueryClient();
  return (
    <DefaultLayout header={<Header />} footer={<Footer />}>
      <QueryClientProvider client={queryClient}>
        <Monthly />
      </QueryClientProvider>
    </DefaultLayout>
  );
};

export default Home;
