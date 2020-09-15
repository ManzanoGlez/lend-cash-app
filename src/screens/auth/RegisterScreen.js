import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthSocialNetworks } from "../../components/Auth/AuthSocialNetworks";
import { IconApp } from "../../components/IconApp";
import { InputApp } from "../../components/InputApp";
import { useForm } from "../../hooks/useForm";
import { validate } from "../../helpers/Validate";
import { startRegister } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";

export const RegisterScreen = () => {
    const dispatch = useDispatch();

    const { values, handleInputChange, setErrors } = useForm({
        name: "",
        lastName: "",
        email: "",
        telephone: "",
        password: "",
        confirm_password: "",
        errors: {},
    });
    const {
        name,
        lastName,
        email,
        telephone,
        password,
        confirm_password,
        errors,
    } = values;

    const handleRegisterWithEmailPassword = async (e) => {
        e.preventDefault();

        if (await isValidForm()) return;

        dispatch(startRegister(name, lastName, email, telephone, password,confirm_password,setErrors));
    };

    const isValidForm = async () => {
        const validation = await validate(values, {
            name: "required|min:3",
            lastName: "required|min:3",
            email: "required|email",
            telephone: "required|digits:10",
            password: "required",
            confirm_password: "required|same:password",
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
            onSubmit={handleRegisterWithEmailPassword}
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
                    <InputApp
                        title="Nombre(s)"
                        placeholder="Ingrese su nombre(s)"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        errorText={errors.name && errors.name[0]}
                    />
                </Col>
                <Col md={12} lg={6}>
                    <InputApp
                        title="Apellidos"
                        placeholder="Ingrese contraseña"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleInputChange}
                        errorText={errors.lastName && errors.lastName[0]}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={6}>
                    <InputApp
                        title="Correo electrónico"
                        placeholder="Ingrese correo electrónico"
                        type="text"
                        autoComplete="off"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        errorText={errors.email && errors.email[0]}
                    />
                </Col>
                <Col md={12} lg={6}>
                    <InputApp
                        title="Teléfono"
                        placeholder="Ingrese contraseña"
                        type="text"
                        name="telephone"
                        value={telephone}
                        onChange={handleInputChange}
                        errorText={errors.telephone && errors.telephone[0]}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={12} lg={6}>
                    <InputApp
                        title="Contraseña"
                        placeholder="Ingrese nueva contraseña"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        errorText={errors.password && errors.password[0]}
                    />
                </Col>
                <Col md={12} lg={6}>
                    <InputApp
                        title="Confirmar contraseña"
                        placeholder="Confirme su contraseña"
                        type="password"
                        name="confirm_password"
                        value={confirm_password}
                        onChange={handleInputChange}
                        errorText={ errors.confirm_password &&  errors.confirm_password[0]}
                    />
                </Col>
            </Row>

            <Button variant="primary" type="submit" size="lg" block>
                Registrarse <IconApp iconClassName="fas fa-sign-in-alt" />
            </Button>

            <AuthSocialNetworks />

            <Link className="link" to={"/auth/login"}>
                ¿Ya registrado?
            </Link>
        </Form>
    );
};
