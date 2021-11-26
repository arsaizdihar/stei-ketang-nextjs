import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import useMe from "../../hooks/useMe";

const toastId = "vote";

const AlreadyVoteRedirect: React.FC<{ disable?: boolean }> = ({
  children,
  disable,
}) => {
  const router = useRouter();
  const { user } = useMe();
  if (!disable && user?.vote) {
    toast.warn("Kamu sudah vote.", { toastId });
    router.push("/dashboard");
  }
  return <>{children}</>;
};

export default AlreadyVoteRedirect;
