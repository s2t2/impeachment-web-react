import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const IN_DEV_MODE = (process.env.REACT_APP_NODE_ENV === "development") || false // todo: figure out why create react app doesn't respect normal NODE_ENV changes

export default function MainMenu() {
    //console.log("NODE ENV:", process.env.NODE_ENV, IN_DEV_MODE)

    var navLinks = [
        {"href":"/alt-home",     "key":"alt-home",       "text":"Alt Home",  "visible": IN_DEV_MODE},
        {"href":"/about",        "key":"about",          "text":"About",     "visible": true},
        {"href":"/about-scroll", "key":"about-scroll",   "text":"Scroll",    "visible": IN_DEV_MODE},
    ]
    .filter(function(link){
        return link["visible"] === true
    })
    .map(function(link){
        //console.log(link)
        return <Nav.Link key={link["key"]} href={link["href"]}>{link["text"]}</Nav.Link>
    })

    return (
        <div className="d-none d-lg-block d-md-block d-xl-block">
            <Navbar fixed="top" bg="light">
                <Navbar.Brand href="/">Impeachment Tweet Analysis</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {navLinks}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
