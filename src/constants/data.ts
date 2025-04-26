import { Incident } from "../types/Incident";


export const initialData: Incident[] = [
    {
        id: 1,
        title: "Biased Recommendation Algorithm",
        description: "Algorithm consistently favored certain demographics...",
        severity: "Medium",
        reported_at: "2025-03-15T10:00:00Z",
    },
    {
        id: 2,
        title: "LLM Hallucination in Critical Info",
        description: "LLM provided incorrect safety procedure information...",
        severity: "High",
        reported_at: "2025-04-01T14:30:00Z",
    },
    {
        id: 3,
        title: "Minor Data Leak via Chatbot",
        description: "Chatbot inadvertently exposed non-sensitive user metadata...",
        severity: "Low",
        reported_at: "2025-03-20T09:15:00Z",
    },
    {
        id: 4,
        title: "Privacy Breach in User Analytics",
        description:
            "Sensitive user data was exposed through flawed analytics integration...",
        severity: "High",
        reported_at: "2025-04-10T08:45:00Z",
    },
    {
        id: 5,
        title: "Model Bias in Loan Approval Process",
        description:
            "AI model showed bias towards certain income groups, affecting loan eligibility...",
        severity: "Medium",
        reported_at: "2025-04-12T13:20:00Z",
    },
    {
        id: 6,
        title: "Inconsistent Login Issue",
        description:
            "Some users faced difficulty logging in due to session handling errors...",
        severity: "Low",
        reported_at: "2025-04-15T11:10:00Z",
    },
    {
        id: 7,
        title: "Incorrect Time Zone in Global Scheduling",
        description:
            "Time zone conversion errors led to incorrect event schedules for global users...",
        severity: "Medium",
        reported_at: "2025-04-17T16:05:00Z",
    },
    {
        id: 8,
        title: "Unencrypted API Endpoints",
        description:
            "Certain API endpoints were found to be transmitting data without encryption...",
        severity: "High",
        reported_at: "2025-04-18T09:30:00Z",
    },
    {
        id: 9,
        title: "Sudden Service Downtime During Update",
        description:
            "A critical system update caused unexpected downtime for several hours...",
        severity: "Medium",
        reported_at: "2025-04-20T07:00:00Z",
    },
];