import React from "react";

interface SortControlsProps {
  selected: "newest" | "oldest";
  setSortOrder: (value: "newest" | "oldest") => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  selected,
  setSortOrder,
}) => {
  const options = ["Newest First", "Oldest First"];
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((option, index) => {
        const value = index === 0 ? "newest" : "oldest";
        return (
          <button
            key={option}
            onClick={() => setSortOrder(value)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition cursor-pointer
                ${
                  selected === value
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-200"
                }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default SortControls;
