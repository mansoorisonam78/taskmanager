import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish React project', status: 'In Progress' },
    { id: 2, title: 'Prepare presentation', status: 'Pending' },
    { id: 3, title: 'Team meeting at 3 PM', status: 'Completed' },
  ]);

  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [filter, setFilter] = useState('All');

  // ➕ Add Task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask, status: 'Pending' }]);
      setNewTask('');
    }
  };

  // 🗑️ Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // ✏️ Start Editing
  const startEdit = (task) => {
    setEditingTask(task.id);
    setEditTitle(task.title);
  };

  // 💾 Save Edit
  const saveEdit = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: editTitle } : task
    ));
    setEditingTask(null);
    setEditTitle('');
  };

  // ✅ Mark Complete
  const markComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: 'Completed' } : task
    ));
  };

  // 🔍 Filtered Tasks
  const filteredTasks = tasks.filter(task =>
    filter === 'All' ? true : task.status === filter
  );

  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-primary">Dashboard</h2>
            <p className="text-secondary">Manage your tasks efficiently.</p>
          </Col>
        </Row>

        {/* Add Task Input */}
        <Row className="mb-4">
          <Col md={8}>
            <Form.Control
              type="text"
              placeholder="Enter new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="mb-2"
            />
          </Col>
          <Col md={4}>
            <Button variant="success" onClick={addTask}>Add Task</Button>
          </Col>
        </Row>

        {/* Filter Bar */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex gap-2">
              <Button
                variant={filter === 'All' ? 'primary' : 'outline-primary'}
                onClick={() => setFilter('All')}
              >
                All
              </Button>
              <Button
                variant={filter === 'Pending' ? 'primary' : 'outline-primary'}
                onClick={() => setFilter('Pending')}
              >
                Pending
              </Button>
              <Button
                variant={filter === 'In Progress' ? 'primary' : 'outline-primary'}
                onClick={() => setFilter('In Progress')}
              >
                In Progress
              </Button>
              <Button
                variant={filter === 'Completed' ? 'primary' : 'outline-primary'}
                onClick={() => setFilter('Completed')}
              >
                Completed
              </Button>
            </div>
          </Col>
        </Row>

        {/* Task Cards */}
        <Row>
          {filteredTasks.map(task => (
            <Col md={4} key={task.id} className="mb-3">
              <Card className="shadow-sm">
                <Card.Body>
                  {editingTask === task.id ? (
                    <>
                      <Form.Control
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="mb-2"
                      />
                      <Button
                        variant="primary"
                        size="sm"
                        className="me-2"
                        onClick={() => saveEdit(task.id)}
                      >
                        Save
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setEditingTask(null)}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Card.Title>{task.title}</Card.Title>
                      <Card.Text>Status: {task.status}</Card.Text>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => startEdit(task)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="success"
                        size="sm"
                        className="me-2"
                        onClick={() => markComplete(task.id)}
                        disabled={task.status === 'Completed'}
                      >
                        Complete
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;