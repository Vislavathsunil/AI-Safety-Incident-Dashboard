import React from "react";

interface FiltersProps {
  selected: string;
  setFilter: (value: string) => void;
}

const options = ["All", "Low", "Medium", "High"];

const Filters: React.FC<FiltersProps> = ({ selected, setFilter }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setFilter(option)}
          className={`px-4 py-1 rounded-full text-sm font-medium transition text-center cursor-pointer
            ${
              selected === option
                ? "bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-200"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Filters;
