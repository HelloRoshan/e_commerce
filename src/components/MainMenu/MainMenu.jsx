import * as React from 'react';
import Logo from './Logo/Logo';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function MainMenu() {
  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
