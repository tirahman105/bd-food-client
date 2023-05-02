import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" className='shadow p-3 mb-5 bg-body rounded' expand="lg">
      <Container>
        <Navbar.Brand href="#home"> <span className='brand-color fw-bold'>BD</span> <span className='text-success fw-bold'>Food</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center align-items-center">
            <Nav.Link className='nav-item fw-bold'>Home</Nav.Link>
            <Nav.Link className='nav-item fw-bold'>Blog</Nav.Link>
            
           
          </Nav>
          <div className='text-center'>
            <Nav.Link ><button className='btn btn-color'>Sign In</button></Nav.Link>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;