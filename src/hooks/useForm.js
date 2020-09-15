import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
        if (values.errors[target.name]) {
            delete values.errors[target.name];
        }
    };

    const reset = () => setValues(initialState);

    const setInputValue = (attribute: String, value: String) => {
        setValues({
            ...values,
            [attribute]: value,
        });
        if (values.errors[attribute]) {
            delete values.errors[attribute];
        }
    };

    const setErrors = (errors) => {
        setValues({
            ...values,
            errors,
        });
    };

    return { values, handleInputChange, reset, setInputValue, setErrors };
};
