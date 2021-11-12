import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { Candidate } from "../ts/types";
import { fetchWithToken } from "../utils/fetchWithToken";

const useCandidate = (number: number | string) => {
  const query = useQuery<Candidate, AxiosError>(
    ["candidate", number],
    () => fetchWithToken(`candidates/${number}/`),
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

export default useCandidate;
