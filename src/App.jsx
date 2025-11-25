import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";   // ✅ your footer component
import Stat from "./components/Stats";       // ✅ your stat component
import "./index.css";

function AppLayout() {
  const location = useLocation();

  // ✅ Lift tasks state here so Stat + Dashboard share it
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React Router", status: "completed" },
    { id: 2, title: "Build Task Manager", status: "pending" },
  ]);

  const completedTasks = tasks.filter(t => t.status === "completed");
  const pendingTasks = tasks.filter(t => t.status === "pending");

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      {/* Navbar hidden on dashboard */}
      {location.pathname !== "/dashboard" && <Navbar />}

      {/* Main Routes */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Pass tasks + setTasks down to Dashboard */}
          <Route path="/dashboard" element={<Dashboard tasks={tasks} setTasks={setTasks} />} />
        </Routes>
      </div>

      {/* ✅ Footer with Stats */}
      <Footer>
        <Stat
          completed={completedTasks.length}
          pending={pendingTasks.length}
          total={tasks.length}
          status={completedTasks.length === tasks.length ? "All Done 🎉" : "In Progress"}
        />
      </Footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}