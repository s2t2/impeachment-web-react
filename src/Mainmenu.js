import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import {
    LinkContainer
} from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

function Mainmenu() {
    return (
        <Navbar fixed="top" bg="light">
            <Navbar.Brand href="/">Impeachment Tweet Analysis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
               
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Mainmenu;