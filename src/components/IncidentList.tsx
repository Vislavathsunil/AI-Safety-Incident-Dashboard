import React from "react";
import { Incident } from "../types/Incident";
import IncidentItem from "./IncidentItem";

interface IncidentListProps {
  incidents: Incident[];
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  return (
    <div className="space-y-4">
      <h1 className="font-semibold px-2 text-3xl ">AI Incidents</h1>
      <p className="px-2 ">Total Incidents : {incidents.length}</p>
      {incidents.length === 0 ? (
        <p className="text-gray-600 text-center">No incidents found.</p>
      ) : (
        incidents.map((incident) => (
          <IncidentItem key={incident.id} incident={incident} />
        ))
      )}

       
    </div>
  );
};

export default IncidentList;
