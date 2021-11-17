import React from "react";

const AgendaComp: React.FC<{
  content: string;
  date: Date;
}> = ({ content, date }) => {
  const passed = new Date().getDate() > date.getDate();
  return (
    <div className="flex flex-row space-x-12 text-custom">
      <h2
        className={`${passed ? "text-gray-400" : "font-semibold"}`}
      >{`${date.getDate()} Nov`}</h2>
      <p className={`${passed ? "text-gray-400" : ""}`}>{content}</p>
    </div>
  );
};

export default AgendaComp;
