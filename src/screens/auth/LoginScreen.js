import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
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

    const handleLoginWithGoogle = (e) => {
        e.preventDefault();
        console.log("handleLoginWithGoogle");
    };

    const isValidForm = () => {};

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

            <Input
                title="Correo electrónico"
                placeholder="Ingrese correo electrónico"
                type="email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={handleInputChange}
            />
            <Input
                title="Contraseña"
                placeholder="Ingrese contraseña"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                infoText="No compartimos tu información con nadie."
            />

            <Button variant="primary" type="submit" size="lg" block>
                Iniciar sesión <i className="fas fa-sign-in-alt"></i>
            </Button>

            <div className="auth__social-networks">
                <p>Iniciar sesión con redes sociales</p>

                <div className="google-btn" onClick={handleLoginWithGoogle}>
                    <div className="google-icon-wrapper">
                        <img
                            className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="google button"
                        />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
            </div>

            <Link className="link" to={"/auth/register"}>
                Crear una nueva cuenta
            </Link>
        </Form>
    );
};
