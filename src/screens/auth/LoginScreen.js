import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthSocialNetworks } from "../../components/Auth/AuthSocialNetworks";
import { IconApp } from "../../components/IconApp";
import { InputApp } from "../../components/InputApp";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
    const [values, handleInputChange] = useForm({
        email: "",
        password: "",
    });
    const { email, password } = values;

    const handleLoginWithEmailPassword = (e) => {
        e.preventDefault();
        isValidForm();
        console.log(values);
        console.log("handleLoginWithEmailPassword");
    };


    const isValidForm = () => {
        console.log("isValidForm");
    };

    return (
        <Form
            onSubmit={handleLoginWithEmailPassword}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Row className="text-center mb-3">
                <Col xs={12} md={12}>
                    <Image
                        src="/logo192.png"
                        rounded
                        style={{ height: 50, objectFit: "scale-down" }}
                        alt="logo"
                    />
                </Col>
                <Col xs={12} md={12}>
                    <h3 className="auth__title ">Inicio de sesión</h3>
                </Col>
            </Row>

            <InputApp
                title="Correo electrónico"
                placeholder="Ingrese correo electrónico"
                type="email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={handleInputChange}
            />
            <InputApp
                title="Contraseña"
                placeholder="Ingrese contraseña"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                infoText="No compartimos tu información con nadie."
            />

            <Button variant="primary" type="submit" size="lg" block>
                Iniciar sesión <IconApp iconClassName="fas fa-sign-in-alt" />
            </Button>

            <AuthSocialNetworks />

            <Link className="link" to={"/auth/register"}>
                Crear una nueva cuenta
            </Link>
        </Form>
    );
};
