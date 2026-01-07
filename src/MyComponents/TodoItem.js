import React, { useState } from 'react';
import { Card, Button, Form, Modal, Badge } from "react-bootstrap";

const TodoItem = ({ todos, onDelete, onEdit, toggleComplete }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [editTitle, setEditTitle] = useState(todos.title);
    const [editDesc, setEditDesc] = useState(todos.desc);

    const handleEdit = () => {
        if (editTitle.trim() && editDesc.trim()) {
            const updatedTodo = {
                ...todos,
                title: editTitle,
                desc: editDesc
            };
            onEdit(updatedTodo);
            setShowEditModal(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <>
            <Card className="border-0 border-bottom rounded-0" style={{backgroundColor: todos.completed ? '#f8f9fa' : 'white'}}>
                <Card.Body className="py-3">
                    <div className="d-flex align-items-start">

                        <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <h5 className={`mb-1 ${todos.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                                        {todos.title}
                                        {todos.completed && (
                                            <Badge pill style={{backgroundColor: "#198754",marginLeft: "8px"}}>
                                                ✓ Completed
                                            </Badge>
                                        )}
                                    </h5>
                                    <p className={`mb-2 ${todos.completed ? 'text-muted' : 'text-secondary'}`}>
                                        {todos.desc}
                                    </p>
                                    <small className="text-muted">
                                        <i className="bi bi-calendar3 me-1"></i>
                                        Created: {formatDate(todos.createdAt)}
                                    </small>
                                </div>

                                <div className="d-flex gap-2">
                                    <Button
                                        variant="light"
                                        onClick={() => toggleComplete(todos)}
                                        style={{
                                            padding: "6px 12px",
                                            borderRadius: "10px",
                                            backgroundColor: "#f1f3f5",
                                            color: "#073e01",
                                            border: "1px solid #dee2e6",
                                            fontWeight: 500
                                        }}>
                                        <i className={`bi ${todos.completed ? "bi-check-lg" : "bi-circle"}`}></i>
                                        Completed
                                    </Button>

                                    <Button
                                        variant="light"
                                        onClick={() => setShowEditModal(true)}
                                        style={{
                                            padding: "6px 12px",
                                            borderRadius: "10px",
                                            backgroundColor: "#f1f3f5",
                                            color: "#0d6efd",
                                            border: "1px solid #dee2e6",
                                            fontWeight: 500
                                        }}>
                                        <i className="bi bi-pencil-fill me-1"></i>
                                        Edit
                                    </Button>

                                    <Button
                                        variant="light"
                                        onClick={() => onDelete(todos)}
                                        style={{
                                            padding: "6px 12px",
                                            borderRadius: "10px",
                                            backgroundColor: "#f1f3f5",
                                            color: "#dc3545",
                                            border: "1px solid #dee2e6",
                                            fontWeight: 500
                                        }}>
                                        <i className="bi bi-trash-fill me-1"></i>
                                        Delete
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
                <Modal.Header closeButton style={{backgroundColor: '#2c3e50'}} className="text-white">
                    <Modal.Title>
                        <i className="bi bi-pencil-square me-2"></i>
                        Edit Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                placeholder="Enter task title"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={editDesc}
                                onChange={(e) => setEditDesc(e.target.value)}
                                placeholder="Enter task description"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TodoItem;