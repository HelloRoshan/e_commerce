import * as React from 'react';
import { Logo } from '../';
import { Badge, Container, Navbar, Nav } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";

export default function MainMenu() {
  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#/">
            <BsFillCartFill size={24} />
            <Badge pill bg="primary" style={{fontSize: '.65rem'}}>2</Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
