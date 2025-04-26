import { useState } from "react";
import { Incident } from "../src/types/Incident";
import IncidentList from "./components/IncidentList";
import Filters from "./components/Filters";
import SortControls from "./components/SortControls";
import IncidentForm from "./components/IncidentForm";
import { initialData } from "../src/constants/data";


function App() {
  const [incidents, setIncidents] = useState<Incident[]>(initialData);
  const [severityFilter, setSeverityFilter] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const filtered = incidents.filter((incident) =>
    severityFilter === "All" ? true : incident.severity === severityFilter
  );

  const sorted = [...filtered].sort((a, b) => {
    return sortOrder === "newest"
      ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
      : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime();
  });

  const addIncident = (newIncident: Omit<Incident, "id">) => {
    const id = incidents.length + 1;
    setIncidents([{ id, ...newIncident }, ...incidents]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800">
        AI Safety Incident Dashboard
      </h1>

      <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <Filters setFilter={setSeverityFilter} selected={severityFilter} />
        <SortControls setSortOrder={setSortOrder} selected={sortOrder} />
      </div>

      <IncidentForm addIncident={addIncident} />

      <IncidentList incidents={sorted} />
    </div>
  );
}

export default App;
