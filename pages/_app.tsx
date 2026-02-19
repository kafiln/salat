import "@fontsource/open-sans/300.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";
import { AppState, LocalProvider } from "context";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const initialState: AppState = {
  language: "ar",
  periodicity: "DAILY",
};

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LocalProvider initialState={initialState}>
        <>
          <Component {...pageProps} />
        </>
      </LocalProvider>
    </ThemeProvider>
  );
};

export default MyApp;
