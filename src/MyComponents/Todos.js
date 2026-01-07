import React, { useState } from 'react';
import TodoItem from "./TodoItem";
import { Card, Button, Badge, Alert } from "react-bootstrap";

const Todos = (props) => {
    const { todos, onDelete, onEdit, toggleComplete, clearCompleted, clearAll } = props;
    const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const completedCount = todos.filter(todo => todo.completed).length;
    const activeCount = todos.length - completedCount;

    return (
        <div className="container">
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                <Card.Header className="py-3" style={{backgroundColor: '#2c3e50'}}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="mb-0 text-white">
                            <i className="bi bi-list-task me-2"></i>
                            Your Tasks
                            <Badge bg="light" text="dark" className="ms-2">
                                {todos.length}
                            </Badge>
                        </h4>

                        <div className="d-flex gap-2">
                            <Button
                                variant="outline-light"
                                size="sm"
                                onClick={() => setFilter('all')}
                                className={filter === 'all' ? 'active' : ''}
                            >
                                All
                            </Button>
                            <Button
                                variant="outline-light"
                                size="sm"
                                onClick={() => setFilter('active')}
                                className={filter === 'active' ? 'active' : ''}
                            >
                                Active
                            </Button>
                            <Button
                                variant="outline-light"
                                size="sm"
                                onClick={() => setFilter('completed')}
                                className={filter === 'completed' ? 'active' : ''}
                            >
                                Completed
                            </Button>
                        </div>
                    </div>

                    {todos.length > 0 && (
                        <div className="mt-3">
                            <div className="d-flex justify-content-between text-white">
                                <small>
                                    <i className="bi bi-circle-fill text-success me-1"></i>
                                    Active: {activeCount}
                                </small>
                                <small>
                                    <i className="bi bi-check-circle-fill text-primary me-1"></i>
                                    Completed: {completedCount}
                                </small>
                                <small>
                                    <i className="bi bi-clock-history me-1"></i>
                                    Total: {todos.length}
                                </small>
                            </div>
                        </div>
                    )}
                </Card.Header>

                <Card.Body className="p-0">
                    {todos.length === 0 ? (
                        <div className="text-center py-5">
                            <i className="bi bi-clipboard-check display-1 text-muted"></i>
                            <h5 className="mt-3" style={{color: '#6c757d'}}>No tasks yet</h5>
                            <p className="text-muted">Add your first task to get started!</p>
                        </div>
                    ) : filteredTodos.length === 0 ? (
                        <Alert variant="info" className="m-4">
                            <i className="bi bi-info-circle me-2"></i>
                            No {filter} tasks found.
                        </Alert>
                    ) : (
                        <div className="p-0">
                            {filteredTodos.map((todo) => (
                                <TodoItem
                                    key={todo.sno}
                                    todos={todo}
                                    onDelete={onDelete}
                                    onEdit={onEdit}
                                    toggleComplete={toggleComplete}
                                />
                            ))}
                        </div>
                    )}
                </Card.Body>

                {todos.length > 0 && (
                    <Card.Footer className="bg-light py-3">
                        <div className="d-flex justify-content-between">
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={clearCompleted}
                                disabled={completedCount === 0}
                            >
                                <i className="bi bi-trash me-1"></i>
                                Clear Completed
                            </Button>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={clearAll}
                            >
                                <i className="bi bi-trash-fill me-1"></i>
                                Clear All
                            </Button>
                        </div>
                    </Card.Footer>
                )}
            </Card>
        </div>
    );
}

export default Todos;