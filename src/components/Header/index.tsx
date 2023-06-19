import React from "react";
import { Navbar, Container } from "react-bootstrap";

export function Header() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container >
        <Navbar.Brand href="/">Quiztium</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
