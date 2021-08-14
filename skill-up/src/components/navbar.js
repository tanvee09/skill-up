import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './../css/discussion-forum/discussion.css'

export default function NavBar() {   
  return (
    <>
      <Navbar className="navbar navbar-expand-md bg-light navbar-light">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="collapsibleNavbar">
        <Nav>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>  
      </Navbar>
    </>
  );
};