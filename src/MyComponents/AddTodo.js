import React from 'react';
import {Button, Form} from "react-bootstrap";

const AddTodo = () => {
    return (
        <div className="container">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Todos Title</Form.Label>
                    <Form.Control type="text" placeholder="Title"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description"/>
                </Form.Group>

                <Button variant="primary" className="btn btn-success" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default AddTodo;