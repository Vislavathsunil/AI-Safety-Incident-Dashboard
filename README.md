# 🛡️ AI Safety Incident Dashboard
 
**AI Safety Incident Dashboard** is a frontend web application that allows users to view, filter, sort, and report AI safety incidents. It was built using React, TypeScript, and Tailwind CSS to demonstrate core frontend skills such as interactive UI development, state management, and form handling — all in a clean, responsive design without backend integration.

---

## 🔧 Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

---

## 🚀 Features

✅ Display list of mock AI incidents with  
  • Title  
  • Severity  
  • Reported Date  
  • Reported Time  

✅ Filter incidents by Severity (`All`, `Low`, `Medium`, `High`)  
✅ Sort incidents by Reported Date (`Newest First`, `Oldest First`)  
✅ Toggle "View Details" to show/hide full description  
✅ Report new incident via a form (with validation)  
✅ In-memory state management (no backend or API)  
✅ Responsive layout using Flexbox/Grid  
✅ Clean and readable component-based structure  

---

## 📦 Installation & Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Vislavathsunil/AI-Safety-Incident-Dashboard.git
cd AI-Safety-Incident-Dashboard
```
### 2. Install Dependencies

```bash
npm install
```
### 3. Install Tailwind CSS 
    
  Install 'tailwindcss' and '@tailwindcss/vite via npm.
    
    
```
npm install tailwindcss @tailwindcss/vite
```
Configure the Vite plugin
Add the '@tailwindcss/vite' plugin to your Vite configuration.
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
})

```
Import Tailwind CSS
Add an '@import' to your CSS file that imports Tailwind CSS.
```
@import "tailwindcss";
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open In your browser
```
 http://localhost:5173
```



