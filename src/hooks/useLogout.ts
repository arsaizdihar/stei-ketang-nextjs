import { useRouter } from "next/router";
import { mutate } from "swr";

const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    localStorage.clear();
    await mutate("me/", null);
    router.push("/login");
  };

  return logout;
};

export default useLogout;
