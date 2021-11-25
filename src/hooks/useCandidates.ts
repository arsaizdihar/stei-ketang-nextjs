import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { Candidate } from "../ts/types";
import { fetchWithToken } from "../utils/fetchWithToken";

const useCandidates = () => {
  const query = useQuery<Candidate[], AxiosError>(
    "candidates",
    () => fetchWithToken(`candidates/`),
    {
      retry(failureCount, error) {
        const status = error?.response?.status;
        if (status && [404, 401, 403].includes(status)) return false;
        return failureCount < 3;
      },
      refetchOnMount: false,
    }
  );
  return query;
};

export default useCandidates;
