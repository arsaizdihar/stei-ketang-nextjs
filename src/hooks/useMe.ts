import { useQuery } from "react-query";
import { UserType } from "../ts/types";
import { fetchWithToken } from "../utils/fetchWithToken";

const useMe = () => {
  const query = useQuery(
    "me",
    async () => fetchWithToken("me/").catch((err) => undefined),
    {
      retry: false,
      staleTime: 30000,
    }
  );

  return { ...query, user: query.data as UserType | undefined };
};

export default useMe;
