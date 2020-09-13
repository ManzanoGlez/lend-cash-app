import React from "react";
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">
                <Image
                    src="/logo192.png"
                    rounded
                    style={{ height: 30, objectFit: "scale-down",marginRight:10 }}
                    alt="logo"
                />
                Lend Cash
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/app/home">Inicio</Nav.Link>
                    <Nav.Link href="/app/users">Usuarios</Nav.Link>
                    <Nav.Link href="/app/reports">Reportes</Nav.Link>
                    <Nav.Link href="/app/Profile">Perfil</Nav.Link>
                </Nav>
                <NavDropdown
                    className="dashboard__nav-user"
                    title="Jorge Manzano"
                    id="collasible-nav-dropdown"
                >
                    <NavDropdown.Item href="#action/3.2">
                        Ver Perfil
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Cerrar sesión
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    );
};
