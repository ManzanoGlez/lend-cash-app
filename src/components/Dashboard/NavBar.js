import React from "react";
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../redux/actions/auth";
import { AvatarApp } from "../AvatarApp";

export const NavBar = () => {
    const {user} = useSelector((state) => state.auth);

    const dispatch = useDispatch();

     const handleLogout = () => {
         dispatch(startLogout());
     };

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">
                <Image
                    src="/logo192.png"
                    rounded
                    style={{
                        height: 30,
                        objectFit: "scale-down",
                        marginRight: 10,
                    }}
                    alt="logo"
                />
                Lend Cash
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/app/home">
                        Inicio
                    </NavLink>
                    <NavLink className="nav-link" to="/app/users">
                        Usuarios
                    </NavLink>
                </Nav>
                <NavDropdown
                    className="dashboard__nav-user"
                    // title={user.name}
                    title={
                        <>
                            {user.name}
                            <AvatarApp img={user.img} textToGenerateAvatar={user.email} />
                        </>
                    }
                    id="collasible-nav-dropdown"
                >
                    <NavDropdown.Item href="#action/3.2">
                        Ver Perfil
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                        Cerrar sesión
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    );
};
