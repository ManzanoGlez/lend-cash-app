import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
    const [values, handleInputChange] = useForm({
        name: "",
        lastName: "",
        email: "",
        telephone: "",
        password: "",
        confirm_password: "",
    });
    const {name, lastName, email, telephone, password, confirm_password} = values;

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
                <Col md={12}>
                    <Image
                        src="/logo192.png"
                        rounded
                        style={{ height: 50, objectFit: "scale-down" }}
                        alt="logo"
                    />
                </Col>
                <Col md={12}>
                    <h3 className="auth__title ">Registro</h3>
                </Col>
            </Row>

            <Row>
                <Col md={12} lg={6}>
                    <Input
                        title="Nombre(s)"
                        placeholder="Ingrese su nombre(s)"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </Col>
                <Col md={12} lg={6}>
                    <Input
                        title="Apellidos"
                        placeholder="Ingrese contraseña"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleInputChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={6}>
                    <Input
                        title="Correo electrónico"
                        placeholder="Ingrese correo electrónico"
                        type="email"
                        autoComplete="off"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Col>
                <Col md={12} lg={6}>
                    <Input
                        title="Teléfono"
                        placeholder="Ingrese contraseña"
                        type="text"
                        name="telephone"
                        value={telephone}
                        onChange={handleInputChange}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={12} lg={6}>
                    <Input
                        title="Contraseña"
                        placeholder="Ingrese nueva contraseña"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </Col>
                <Col md={12} lg={6}>
                    <Input
                        title="Confirmar contraseña"
                        placeholder="Confirme su contraseña"
                        type="password"
                        name="confirm_password"
                        value={confirm_password}
                        onChange={handleInputChange}
                        errorText="Contraseña no coincide"
                    />
                </Col>
            </Row>

            <Button variant="primary" type="submit" size="lg" block>
                Registrarse <i className="fas fa-sign-in-alt"></i>
            </Button>

            <div className="auth__social-networks">
                <p>Registrarse con redes sociales</p>

                <div className="google-btn" onClick={handleLoginWithGoogle}>
                    <div className="google-icon-wrapper">
                        <img
                            className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="google button"
                        />
                    </div>
                    <p className="btn-text">
                        Register with google
                    </p>
                </div>
            </div>

            <Link className="link" to={"/auth/login"}>
                ¿Ya registrado?
            </Link>
        </Form>
    );
};
