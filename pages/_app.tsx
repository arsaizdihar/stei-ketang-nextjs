import type { AppProps } from "next/app";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import RouterLoading from "../src/components/main/RouterLoading";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-center"
        theme="light"
        transition={Zoom}
        pauseOnFocusLoss={false}
      />
      <RouterLoading />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
