import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import LoadingModal from "./LoadingModal";

const RouterLoading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => setLoading(true);
    const handleComplete = (url: string) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return <LoadingModal isLoading={loading} />;
};

export default RouterLoading;
