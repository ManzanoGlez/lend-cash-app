import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AuthSocialNetworks } from "../../components/Auth/AuthSocialNetworks";
import { IconApp } from "../../components/IconApp";
import { InputApp } from "../../components/InputApp";
import { validate } from "../../helpers/Validate";
import { useForm } from "../../hooks/useForm";
import { startLogin } from "../../redux/actions/auth";

export const LoginScreen = () => {
    const dispatch = useDispatch();

    const { values, handleInputChange, setErrors } = useForm({
        email: "",
        password: "",
        errors: {},
    });

    const { email, password, errors } = values;

    const handleLoginWithEmailPassword = async (e) => {
        e.preventDefault();

        if (await isValidForm()) return;

        dispatch(startLogin(email, password, setErrors));
    };

 

    const isValidForm = async () => {
        const validation = await validate(values, {
            email: "required|email",
            password: "required",
        });

        if (validation.fails()) {
            setErrors(validation.errors.all());
        } else {
            setErrors({});
        }

        return validation.fails();
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
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
                errorText={errors.email && errors.email[0]}
            />
            <InputApp
                title="Contraseña"
                placeholder="Ingrese contraseña"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                infoText="No compartimos tu información con nadie."
                errorText={errors.password && errors.password[0]}
            />

            <Button variant="primary" type="submit" size="lg" block>
                Iniciar sesión <IconApp iconClassName="fas fa-sign-in-alt" />
            </Button>

            <AuthSocialNetworks  />

            <Link className="link" to={"/auth/register"}>
                Crear una nueva cuenta
            </Link>
        </Form>
    );
};
