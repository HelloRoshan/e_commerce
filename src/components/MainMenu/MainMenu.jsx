import * as React from 'react';
import { Logo } from '../';
import { Badge, Container, Navbar, Nav } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";

import { useSelector } from 'react-redux';

export default function MainMenu() {
  const cartItems = useSelector((state) => state.counter.value)

  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#/">
            <BsFillCartFill size={24} />
            <Badge pill bg="primary" style={{fontSize: '.65rem'}}>{cartItems}</Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
