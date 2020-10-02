import React from 'react';
import { NavLink } from 'react-router-dom'; 
import Nav from 'react-bootstrap/Nav';


function Sidebar() {
    return (


        <div className="sidebar">

            <Nav sticky="top" defaultActiveKey="/" className="flex-column">
                <div className="sidebarWrapper">
                    
                    <NavLink to="/dashboard-one" activeClassName="active">Dashboard One</NavLink>

                    <NavLink to="/dashboard-two" activeClassName="active">Dashboard Two</NavLink>
                    
                    <NavLink to="/dashboard-three" activeClassName="active">Dashboard Three</NavLink>

                    <NavLink to="/dashboard-four" activeClassName="active">Dashboard Four</NavLink>

                    <NavLink to="/dashboard-five" activeClassName="active">Dashboard Five</NavLink>

                    <NavLink to="/dashboard-six" activeClassName="active">Dashboard Six</NavLink>

                    <NavLink to="/dashboard-seven" activeClassName="active">Dashboard Seven</NavLink>

                </div>
                
            </Nav>
        </div>

    );
}

export default Sidebar;