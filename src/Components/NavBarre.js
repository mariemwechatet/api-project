import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBarre = () => {
  return (
    <div>


<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Application Cocktail</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Product </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



    </div>
  )
}

export default NavBarre