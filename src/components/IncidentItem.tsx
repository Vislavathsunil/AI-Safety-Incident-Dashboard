import React, { useState } from "react";
import { Incident } from "../types/Incident";

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {incident.title}
          </h3>
          <p className="text-sm text-gray-500">
            Severity:{" "}
            <span
              className={`font-medium ${
                incident.severity === "High"
                  ? "text-red-600"
                  : incident.severity === "Medium"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              {incident.severity}
            </span>
            <span className="ml-2">
              {" • "}
              {new Date(incident.reported_at).toLocaleDateString()}{" "}
              {new Date(incident.reported_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </p>
          {expanded && (
            <p className="mt-3 text-gray-700 text-sm block sm:hidden">
              {incident.description}
            </p>
          )}
        </div>
        <button
          className="mt-2 sm:mt-0 border border-blue-500 px-3 py-1 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-600 hover:border-blue-600"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span className="text-sm text-white font-semibold">
            {expanded ? "Hide Details" : "View Details"}
          </span>
        </button>
      </div>

      {expanded && (
        <p className="mt-3 text-gray-700 text-sm hidden sm:block">
          {incident.description}
        </p>
      )}
    </div>
  );
};

export default IncidentItem;
