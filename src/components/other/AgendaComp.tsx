import React from "react";

const AgendaComp: React.FC<{
  content: string;
  date: string;
}> = ({ content, date }) => {
  return (
    <div className="flex flex-row space-x-12 text-sm">
      <h2 className="font-semibold">{date}</h2>
      <p>{content}</p>
    </div>
  );
};

export default AgendaComp;
