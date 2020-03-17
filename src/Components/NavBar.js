import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

const NaviBar = () => {
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="https://www.codeforbaltimore.org/" target="_blank">
                <img 
                    src='https://codeforbaltimore.org/images/cfb_logo_full.png'
                    alt='Code for Baltimore Logo'
                    style={{width: '110px', height: '60px'}}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" >
                    <NavLink exact to="/" className='nav-link'>Home</NavLink>
                    <NavLink to="/about" className='nav-link'>About</NavLink>
                    <NavDropdown title="Resources" id="basic-nav-dropdown">
                        <NavLink to="/resources" className='dropdown-item'>Resoruce Stuff</NavLink>
                        <NavLink to="/map" className='dropdown-item'>Map Stuff</NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/somepage" className='dropdown-item'>Some Page</NavLink>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" 
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NaviBar;