
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function TopNav() {
    return (
        <div className="d-none d-lg-block d-md-block d-xl-block">
            <Navbar fixed="top" bg="light">
                <Navbar.Brand href="/">Impeachment Tweet Analysis</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
