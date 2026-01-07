import React, {useState} from 'react';
import {Button, Form, Card} from "react-bootstrap";

const AddTodo = (props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !desc.trim()) {
            alert('Please enter both title and description');
        } else {
            props.addTodo(title, desc);
            setTitle('');
            setDesc('');
        }
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">
                        <i className="bi bi-card-heading me-2"></i>
                        Task Title
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        className="py-2"
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">
                        <i className="bi bi-text-paragraph me-2"></i>
                        Description
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={desc}
                        placeholder="Description"
                        onChange={(e) => setDesc(e.target.value)}
                        className="py-2"
                    />
                </Form.Group>

                <div className="d-grid">
                    <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        className="py-2"
                        style={{backgroundColor: '#2c3e50', borderColor: '#2c3e50'}}
                    >
                        <i className="bi bi-plus-circle me-2"></i>
                        Add Task
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default AddTodo;