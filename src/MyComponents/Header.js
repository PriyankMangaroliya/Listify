import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <Navbar expand="lg" className="shadow-sm" style={{backgroundColor: '#2c3e50'}} variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold">
                    <i className="bi bi-check2-all me-2"></i>
                    {props.title}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className="mx-2 px-3 py-2 rounded-3"
                            style={{transition: 'all 0.3s'}}
                            activeClassName="active"
                        >
                            <i className="bi bi-house-door me-2"></i>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className="mx-2 px-3 py-2 rounded-3"
                            style={{transition: 'all 0.3s'}}
                        >
                            <i className="bi bi-info-circle me-2"></i>
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

Header.defaultProps = {
    title: "Listify",
    search: false
}

Header.propTypes = {
    title: PropTypes.string,
    search: PropTypes.bool.isRequired
}