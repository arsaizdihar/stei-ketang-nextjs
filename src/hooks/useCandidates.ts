import useSWR from "swr";
import { Candidate } from "../ts/types";
import { fetchWithToken } from "../utils/fetchWithToken";

const useCandidates = () => {
  const { data, error } = useSWR(`candidates/`, (url) => fetchWithToken(url), {
    revalidateOnFocus: false,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (retryCount >= 10) return;
      if (
        error?.response?.status === 404 ||
        error?.response?.status === 401 ||
        error?.response?.status === 403
      )
        return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    },
  });
  return {
    candidates: data as Candidate[] | undefined,
    isLoading: !error && !data,
    error,
  };
};

export default useCandidates;
