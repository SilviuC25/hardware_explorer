import React from "react";

type DividerProps = {
  text: string;
};

const Divider: React.FC<DividerProps> = ({ text }) => (
  <span className="flex items-center my-8">
    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></span>
    <span className="shrink-0 px-4 text-white text-lg font-semibold">{text}</span>
    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
  </span>
);

export default Divider;
