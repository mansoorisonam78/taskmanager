import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Dashboard({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");
  const [activeTab, setActiveTab] = useState("summary");
  const navigate = useNavigate();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTask, status: "pending" }]);
    setNewTask("");
    setActiveTab("pending");
  };

  const markCompleted = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: "completed" } : t));
  };

  const completedTasks = tasks.filter(t => t.status === "completed");
  const pendingTasks = tasks.filter(t => t.status === "pending");

  return (
    <div className="dashboard-container d-flex">
      {/* Sidebar */}
      <div className="sidebar p-3 d-flex flex-column justify-content-between">
        <div>
          <h4 className="mb-4">📌 Task Manager</h4>
          <ul className="nav flex-column">
            <li><button className={`nav-link ${activeTab==="summary"?"active":""}`} onClick={()=>setActiveTab("summary")}>📊 Dashboard</button></li>
            <li><button className={`nav-link ${activeTab==="completed"?"active":""}`} onClick={()=>setActiveTab("completed")}>✅ Completed Tasks</button></li>
            <li><button className={`nav-link ${activeTab==="pending"?"active":""}`} onClick={()=>setActiveTab("pending")}>⏳ Pending Tasks</button></li>
            <li><button className={`nav-link ${activeTab==="add"?"active":""}`} onClick={()=>setActiveTab("add")}>➕ Add New Task</button></li>
            <li><button className={`nav-link ${activeTab==="status"?"active":""}`} onClick={()=>setActiveTab("status")}>📌 Task Status</button></li>
          </ul>
        </div>

        {/* Bottom buttons */}
        <div className="sidebar-bottom">
          <button className={`nav-link ${activeTab==="login"?"active":""}`} onClick={()=>setActiveTab("login")}>🔑 Login</button>
          <button className={`nav-link ${activeTab==="signup"?"active":""}`} onClick={()=>setActiveTab("signup")}>📝 Sign Up</button>
          <button className="nav-link back-home" onClick={() => navigate("/")}>⬅️ Back to Home</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="content flex-grow-1 p-4">
        {activeTab === "summary" && (
          <>
            <h2 className="dashboard-title">📊 Task Dashboard</h2>
            <div className="row text-center">
              <div className="col-md-3 dashboard-card">Completed: {completedTasks.length}</div>
              <div className="col-md-3 dashboard-card">Pending: {pendingTasks.length}</div>
              <div className="col-md-3 dashboard-card">Total: {tasks.length}</div>
              <div className="col-md-3 dashboard-card">
                Status: {completedTasks.length === tasks.length ? "All Done 🎉" : "In Progress"}
              </div>
            </div>
          </>
        )}

        {activeTab === "completed" && (
          <>
            <h2 className="dashboard-title">✅ Completed Tasks</h2>
            <ul className="list-group task-list">
              {completedTasks.map(t => <li key={t.id} className="list-group-item completed">{t.title}</li>)}
            </ul>
          </>
        )}

        {activeTab === "pending" && (
          <>
            <h2 className="dashboard-title">⏳ Pending Tasks</h2>
            <ul className="list-group task-list">
              {pendingTasks.map(t => (
                <li key={t.id} className="list-group-item d-flex justify-content-between pending">
                  {t.title}
                  <button className="btn btn-sm btn-success" onClick={()=>markCompleted(t.id)}>Mark Completed</button>
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === "add" && (
          <>
            <h2 className="dashboard-title">➕ Add New Task</h2>
            <form onSubmit={handleAddTask} className="add-task-form">
              <div className="mb-3">
                <label className="form-label">Task Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter new task..."
                  value={newTask}
                  onChange={(e)=>setNewTask(e.target.value)}
                />
              </div>
              <button className="btn btn-primary w-100">Add Task</button>
            </form>
          </>
        )}

        {activeTab === "status" && (
          <>
            <h2 className="dashboard-title">📌 Task Status</h2>
            <p>✅ Completed: {completedTasks.length}</p>
            <p>⏳ Pending: {pendingTasks.length}</p>
            <p>📊 Total: {tasks.length}</p>
            <p>Status: {completedTasks.length === tasks.length ? "All Done 🎉" : "In Progress"}</p>
          </>
        )}

        {activeTab === "login" && (
          <>
            <h2 className="dashboard-title">🔑 Login</h2>
            <form className="auth-form">
              <input type="text" className="form-control mb-2" placeholder="Username" />
              <input type="password" className="form-control mb-2" placeholder="Password" />
              <button className="btn btn-primary w-100">Login</button>
            </form>
          </>
        )}

        {activeTab === "signup" && (
          <>
            <h2 className="dashboard-title">📝 Sign Up</h2>
            <form className="auth-form">
              <input type="text" className="form-control mb-2" placeholder="Username" />
              <input type="email" className="form-control mb-2" placeholder="Email" />
              <input type="password" className="form-control mb-2" placeholder="Password" />
              <button className="btn btn-success w-100">Sign Up</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;