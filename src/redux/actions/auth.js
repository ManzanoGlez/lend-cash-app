import Swal from "sweetalert2";
import { Call } from "../../helpers/fetch";
import { errorHandler } from "../../helpers/handleErrors";
import { types } from "../types";
import { startEventLogout } from "./events";


export const startLogin = (email, password) => {
    return async (dispatch) => {
        email = email.toString().toLowerCase();

        const data = await Call(
            "/auth/login",
            "POST",
            { email, password },
            false
        );

        if (data.ok) {
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("token-init-date", new Date().getTime());

            dispatch(login(data.user));
        } else {
            errorHandler(data);
        }
    };
};

export const startRegister = (name, email, password, password_confirm) => {
    return async (dispatch) => {
        if (password !== password_confirm) {
            return Swal.fire({
                title: "Error",
                text: "Confirmar contraseña debe no coincide.",
                icon: "warning",
            });
        }

        email = email.toString().toLowerCase();

        const data = await Call(
            "/auth/register",
            "POST",
            { name, email, password },
            false
        );

        if (data.ok) {
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(register(data.user));
        } else {
            errorHandler(data);
        }
    };
};

export const startChecking = () => {
    return async (dispatch) => {
        const data = await Call("/auth/renew");

        if (data.ok) {
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("token-init-date", new Date().getTime());

            dispatch(login(data.user));
        } else {
            dispatch(checkingFinish());
        }
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch(startEventLogout());
        dispatch(logout());
    };
};

const login = (user) => ({
    type: types.authLogin,
    payload: user,
});
const register = (user) => ({
    type: types.authRegister,
    payload: user,
});
const checkingFinish = () => ({
    type: types.authCheckingFinish,
});
const logout = () => ({
    type: types.authLogout,
});
