import { useRouter } from "next/router";
import { useQueryClient } from "react-query";

const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = async () => {
    localStorage.clear();
    queryClient.refetchQueries("me").then(() => router.push("/login"));
  };

  return logout;
};

export default useLogout;
