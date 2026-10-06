import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Progress from "./pages/Progress";
import Contribution from "./pages/Contribution";
import History from "./pages/History";
import Reports from "./pages/Reports";
import Members from "./pages/Members";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-slate-100">
              <Sidebar />

              <main className="ml-64 min-h-screen">
                <div className="mx-auto max-w-7xl px-8 py-8">
                  <Routes>
                    <Route
                      path="/"
                      element={<Navigate to="/dashboard" replace />}
                    />

                    <Route
                      path="/dashboard"
                      element={<Dashboard />}
                    />

                    <Route
                      path="/tasks"
                      element={<Tasks />}
                    />

                    <Route
                      path="/members"
                      element={<Members />}
                    />

                    <Route
                      path="/projects"
                      element={<Projects />}
                    />

                    <Route
                      path="/progress"
                      element={<Progress />}
                    />

                    <Route
                      path="/contribution"
                      element={<Contribution />}
                    />

                    <Route
                      path="/history"
                      element={<History />}
                    />

                    <Route
                      path="/reports"
                      element={<Reports />}
                    />

                    <Route
                      path="*"
                      element={
                        <Navigate to="/dashboard" replace />
                      }
                    />
                  </Routes>
                </div>
              </main>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;