import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { fetchWithToken } from "../utils/fetchWithToken";

const useVotingStatus = () => {
  const query = useQuery<{ status: string }, AxiosError>(
    "voting-status",
    () => fetchWithToken(`vote/status/`),
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

export default useVotingStatus;
