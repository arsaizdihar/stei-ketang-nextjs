import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, setLogger } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import RouterLoading from "../src/components/main/RouterLoading";
import "../styles/globals.css";
const queryClient = new QueryClient();
setLogger({
  error: () => {},
  log: console.log,
  warn: console.warn,
});
config.autoAddCss = false;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-center"
          theme="light"
          transition={Zoom}
          pauseOnFocusLoss={false}
        />
        <RouterLoading />
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
