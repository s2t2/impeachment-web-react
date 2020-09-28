import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import {
    LinkContainer
} from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sidebar() {
    return (


        <div className="sidebar">

            <Nav sticky="top" defaultActiveKey="/" className="flex-column">
                <div className="sidebarWrapper">
                    <NavLink to="/dashboard-one" activeClassName="active">Dashboard One</NavLink>

                    <NavLink to="/dashboard-two" activeClassName="active">Dashboard Two</NavLink>
                    
                    <NavLink to="/dashboard-three" activeClassName="active">Dashboard Three</NavLink>
                </div>
                
            </Nav>
        </div>

    );
}

export default Sidebar;