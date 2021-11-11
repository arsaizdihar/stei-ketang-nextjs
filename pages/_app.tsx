import type { AppProps } from "next/app";
import RouterLoading from "../src/components/main/RouterLoading";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RouterLoading />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
