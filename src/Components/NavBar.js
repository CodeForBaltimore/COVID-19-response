import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

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
                <Nav className="ml-auto align-items-center" style={{marginRight: '30px'}}>
                    <NavLink exact to="/" className='nav-link'>Home</NavLink>
                    <NavLink to="/about" className='nav-link'>About</NavLink>
                </Nav>
                {/* <Form inline>
                    <FormControl 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" 
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NaviBar;