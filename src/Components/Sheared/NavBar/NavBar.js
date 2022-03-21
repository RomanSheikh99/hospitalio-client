import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Button, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png'

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [admin, setAdmin] = useState(false)
    
    useEffect(() => {
        fetch('http://localhost:5000/admin')
            .then(res => res.json())
            .then(data => {
                data.map(d => {
                    if (d.email == user.email) {
                        setAdmin(true);
                    }
                })
            })
    }, [admin]);


    return (
        <div className='sticky-top bg-white'>
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand>
                        <Link to="/home">
                            <img src={logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link>
                                <NavLink
                                    to="/home"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    Home
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/services"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    Services
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/doctors"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    Doctors
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/about"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    About
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/contact"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    Contact
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex align-items-center"
                            navbarScroll
                        >
                            
                            {user.email ? <NavDropdown title={user.displayName ? user.displayName : user.email} id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link
                                        to='/myCard'
                                        style={{color: '#000', textDecoration: 'none' }}
                                    >
                                        My Card 
                                    </Link>
                                </NavDropdown.Item>
                                {admin && <NavDropdown.Item href="#action/3.2">
                                    <Link
                                        to="/dashboard"
                                        style={{color: '#000', textDecoration: 'none' }}
                                    >
                                        DashBoard
                                    </Link>
                                </NavDropdown.Item>}
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Button
                                        onClick={logOut}
                                        style={{ background: '#12C1AD', outline: 'none', color: '#fff' }}
                                        className="rounded-pill border-0">
                                        LOGOUT
                                    </Button>
                                </NavDropdown.Item>
                            </NavDropdown> : <Button
                                style={{ background: 'none', outline: 'none' }}
                                className="text-black border-0">
                                <Link
                                    style={{ background: '#12C1AD', outline: 'none', color: '#fff',textDecoration: 'none' }}
                                    className="rounded-pill px-3 py-2 border-0"
                                    to='/logIn'>
                                    Log In
                                </Link>
                            </Button>}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBar;