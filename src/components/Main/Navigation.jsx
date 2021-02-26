import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext";

export const Navigation = () => {
    const {logOut} = useAuth()

    return (
        <Navbar bg="dark" variant="dark" className="pl-5 pr-5" expand="md">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto ml-5">
      <Nav.Link href="#features">Inicio</Nav.Link>
      <Nav.Link href="#pricing">Comunidades</Nav.Link>
      <Nav.Link href="#pricing">Talleres</Nav.Link>
      <Nav.Link href="#pricing">Creadores de Contenido</Nav.Link>
    </Nav>
    <Nav>

      <NavDropdown className="pr-5"  title={<i className=" text-light fas fa-user-circle fa-2x " />} id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
        </Navbar>
    )
}
