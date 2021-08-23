//Packages
import React from 'react';

//Styles
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Navegation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Big Data Machine</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <Nav.Link href="/">Login</Nav.Link>
                    <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Home">Home</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};