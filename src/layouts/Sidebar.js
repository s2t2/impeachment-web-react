import React from 'react';
import { BrowserRouter as Router,  NavLink } from 'react-router-dom'; 
import Nav from 'react-bootstrap/Nav';


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