import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function StickyMenu() {
    return (
        <div className="d-none d-lg-block d-md-block d-xl-block">
            <Navbar  sticky="top" bg="light">
                {/* <Navbar.Brand href="/">Impeachment Tweet Analysis</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#section1">Section One</Nav.Link>
                        <Nav.Link href="#section2">Section Two</Nav.Link>
                        <Nav.Link href="#section3">Section Three</Nav.Link>
                        <Nav.Link href="#section4">Section Four</Nav.Link>
                        <Nav.Link href="#section5">Section Five</Nav.Link>
                       
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
        
    );
}

export default StickyMenu;
