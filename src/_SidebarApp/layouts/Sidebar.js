import React from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Sidebar() {
    return (

        <div className="sidebarWrapperRoot">

            <div className="sidebar d-none d-md-block d-sm-none">

                <Nav sticky="top" defaultActiveKey="/" className="flex-column">
                    <div className="sidebarWrapper">

                        <NavLink to="/dashboard-one" activeClassName="active">Dashboard One</NavLink>

                        <NavLink to="/dashboard-two" activeClassName="active">Dashboard Two</NavLink>

                        <NavLink to="/dashboard-three" activeClassName="active">Dashboard Three</NavLink>

                        <NavLink to="/dashboard-four" activeClassName="active">Dashboard Four</NavLink>

                        <NavLink to="/dashboard-five" activeClassName="active">Dashboard Five</NavLink>

                        <NavLink to="/dashboard-six" activeClassName="active">Dashboard Six</NavLink>

                        <NavLink to="/dashboard-seven" activeClassName="active">Dashboard Seven</NavLink>

                        <NavLink to="/dashboard-eight" activeClassName="active">Dashboard Eight</NavLink>

                    </div>

                </Nav>
            </div>

            <div className="sidebarMobile  d-sm-block d-md-none">

                <Navbar bg="light" collapseOnSelect expand="lg">
                    <Navbar.Brand href="/">Impeachment Tweet Analysis</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <div className="mobile-dasbhoard-menu">

                                <NavLink to="/alt-home" activeClassName="active">Alt Home</NavLink>
                                <NavLink to="/about" activeClassName="active">About</NavLink>

                            </div>

                        </Nav>

                        <Nav className="ml-auto">
                            <h6 className="mobile-dasbhoard-menu-title">Dashboards</h6>

                            <div className="mobile-dasbhoard-menu">

                                <NavLink to="/dashboard-one" activeClassName="active">Dashboard One</NavLink>

                                <NavLink to="/dashboard-two" activeClassName="active">Dashboard Two</NavLink>

                                <NavLink to="/dashboard-three" activeClassName="active">Dashboard Three</NavLink>

                                <NavLink to="/dashboard-four" activeClassName="active">Dashboard Four</NavLink>

                                <NavLink to="/dashboard-five" activeClassName="active">Dashboard Five</NavLink>

                                <NavLink to="/dashboard-six" activeClassName="active">Dashboard Six</NavLink>

                                <NavLink to="/dashboard-seven" activeClassName="active">Dashboard Seven</NavLink>

                            </div>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>

    );
}

export default Sidebar;