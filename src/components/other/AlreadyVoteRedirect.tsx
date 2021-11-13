import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import useMe from "../../hooks/useMe";

const toastId = "vote";

const AlreadyVoteRedirect: React.FC = ({ children }) => {
  const router = useRouter();
  const { user } = useMe();
  if (user?.vote) {
    toast.warn("Kamu sudah vote.", { toastId });
    router.push("/dashboard");
  }
  return <>{children}</>;
};

export default AlreadyVoteRedirect;
