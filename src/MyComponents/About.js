import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                        <Card.Header className="py-4 text-center" style={{backgroundColor: '#2c3e50'}}>
                            <h1 className="text-white mb-0">
                                <i className="bi bi-check2-all me-2"></i>
                                About Listify
                            </h1>
                        </Card.Header>

                        <Card.Body className="p-5">
                            <div className="text-center mb-5">
                                <i className="bi bi-clipboard-check display-1" style={{color: '#2c3e50'}}></i>
                            </div>

                            <h3 className="mb-4" style={{color: '#2c3e50'}}>
                                Simplify Your Task Management
                            </h3>

                            <p className="lead mb-4">
                                Listify is a clean, intuitive, and powerful task management application designed to
                                help you organize your daily tasks, stay focused, and boost productivity with ease.
                            </p>

                            <hr className="my-4" />

                            <div className="row mt-5">
                                <div className="col-md-4 mb-4">
                                    <div className="text-center">
                                        <i className="bi bi-plus-circle display-4 mb-3" style={{color: '#2c3e50'}}></i>
                                        <h5>Add Tasks</h5>
                                        <p className="text-muted">Quickly add new tasks with titles and descriptions</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="text-center">
                                        <i className="bi bi-pencil-square display-4 mb-3" style={{color: '#2c3e50'}}></i>
                                        <h5>Edit & Update</h5>
                                        <p className="text-muted">Modify your tasks as your needs change</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="text-center">
                                        <i className="bi bi-check-circle display-4 mb-3" style={{color: '#2c3e50'}}></i>
                                        <h5>Track Progress</h5>
                                        <p className="text-muted">Mark tasks as completed and track your productivity</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-5">
                                <Link to="/" className="btn btn-lg" style={{backgroundColor: '#2c3e50', color: 'white'}}>
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Back to Tasks
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;