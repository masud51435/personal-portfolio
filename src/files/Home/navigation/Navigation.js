import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../image/Untitled-1.png'

const Navigation = () => {
  return (
    <>
      <Navbar  variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <Image src={logo} style={{width:'50px'}}/> <span><span style={{fontWeight:"700"}}>Masud</span> Rana</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end" >
            <Nav.Link as={Link} style={{color:'white', fontWeight:'600'}} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} style={{color:'white', fontWeight:'600'}} to="/skill">Skills</Nav.Link>
            <Nav.Link as={Link} style={{color:'white', fontWeight:'600'}} to="/project">Project</Nav.Link>
            <Nav.Link as={Link} style={{color:'white', fontWeight:'600'}} to="/contract">Contract</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;