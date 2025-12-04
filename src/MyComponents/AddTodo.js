import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const AddTodo = (props) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert('Please enter a title and desc');
        } else {
            props.addTodo(title, desc);
            setTitle('');
            setDesc('');
        }
    }

    return (
        <div className="container">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Todos Title</Form.Label>
                    <Form.Control type="text" value={title} id="title" placeholder="Title"
                                  onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" id="desc" value={desc} placeholder="Description"
                                  onChange={(e) => setDesc(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" className="btn btn-success" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default AddTodo;