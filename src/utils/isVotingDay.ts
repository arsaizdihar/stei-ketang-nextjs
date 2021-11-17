import { votingDate } from "../constants/votingDate";

export const isVotingDay = () => {
  const date = new Date();
  return (
    date.getFullYear() == votingDate.getFullYear() &&
    date.getMonth() == votingDate.getMonth() &&
    date.getDate() == votingDate.getDate()
  );
};
