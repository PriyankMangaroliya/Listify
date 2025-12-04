import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                {/* Brand → Use Link */}
                <Navbar.Brand as={Link} to="/">
                    {props.title}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>

                        {/* Nav Links → Use as={Link} */}
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                    </Nav>

                    {/* Conditional Search */}
                    { props.search && (
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

Header.defaultProps = {
    title: "My Todos List",
    search: true
}

Header.propTypes = {
    title: PropTypes.string,
    search: PropTypes.bool.isRequired
}
