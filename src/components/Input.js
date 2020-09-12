import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const Input = (props) => {
    const {
        name = "",
        onChange = () => {},
        value = "",
        placeholder = "",
        type = "text",
        title = "",
        infoText = "",
        errorText = "",
        autoComplete = "on",
    } = props;

    return (
        <Form.Group>
            <label
                htmlFor={`id-input-${name}`}
                style={{ fontSize: 14, fontWeight: 500 }}
            >
                {title}
            </label>
            <input
                id={`id-input-${name}`}
                className="input-app"
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                name={name}
                value={value}
                onChange={onChange}
            />

            <Form.Text className={`text-error`}>{errorText}</Form.Text>
            <Form.Text className={`text-muted`}>{infoText}</Form.Text>
        </Form.Group>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    infoText: PropTypes.string,
    errorText: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    autoComplete: PropTypes.string,
};
