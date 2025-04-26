import React, { useState } from "react";
import { Incident } from "../types/Incident";

interface IncidentFormProps {
  addIncident: (incident: Omit<Incident, "id">) => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ addIncident }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState<"Low" | "Medium" | "High">("Low");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Please enter all details.");
      return;
    }

    const newIncident = {
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };

    addIncident(newIncident);
    setTitle("");
    setDescription("");
    setSeverity("Low");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-4 rounded-lg mb-6"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Report New Incident
      </h2>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Incident title"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Brief description"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Severity
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={severity}
          onChange={(e) =>
            setSeverity(e.target.value as "Low" | "Medium" | "High")
          }
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default IncidentForm;
