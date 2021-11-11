import { useRouter } from "next/router";
import React from "react";
import useMe from "../../hooks/useMe";

const NoLoginRedirect: React.FC = ({ children }) => {
  const router = useRouter();
  const { isLoading, user } = useMe();
  if (!isLoading && !user) router.push("/login");
  return <>{children}</>;
};

export default NoLoginRedirect;
