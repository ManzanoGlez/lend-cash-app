import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

        const reset = () => setValues(initialState);


    const setInputValue = (inputName: String, value: String) => {
        setValues({
            ...values,
            [inputName]: value,
        });
    };


    return [values, handleInputChange, reset, setInputValue];
};
