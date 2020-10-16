import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { StickyContainer, Sticky } from 'react-sticky';

function StickyMenu() {
    return (
        <StickyContainer>
        {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
        <Sticky>
          {({
            style,

            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <header style={style}>
                            {/* ... */}
                            <div className="d-none d-lg-block d-md-block d-xl-block">
                                <Navbar className="mt-70" bg="light">
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
            </header>
          )}
        </Sticky>
        {/* ... */}
      </StickyContainer>
        
        
    );
}

export default StickyMenu;
