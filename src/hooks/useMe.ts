import useSWR from "swr";
import { UserType } from "../ts/types";
import { fetchWithToken } from "../utils/fetchWithToken";

const useMe = () => {
  const { data, error } = useSWR("me/", (url) => fetchWithToken(url), {
    // shouldRetryOnError: false,
    // revalidateOnFocus: false,
    // errorRetryCount: 5,
    // dedupingInterval: 60000,
  });
  const isLoading = !error && !data;

  return {
    user: data as UserType | undefined,
    isLoading,
    error,
  };
};

export default useMe;
