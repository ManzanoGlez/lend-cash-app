import { Call } from "../../helpers/fetch";
import { errorHandler } from "../../helpers/handleErrors";
import { types } from "../types";
import { startUILoading, stopUILoading } from "./ui";

export const startLogin = (email, password, setErrors = null) => {
    return async (dispatch) => {
        dispatch(startUILoading());

        email = email.toLowerCase();

        const resp = await Call("/auth/login","POST",{ email, password },false);

        if (resp.success) {
            const { access_token, user } = resp.success;

            localStorage.setItem("token", access_token);
            localStorage.setItem("token-init-date", new Date().getTime());

            dispatch(login(user));
        } else {
            errorHandler(resp, setErrors);
        }
        dispatch(stopUILoading());
    };
};

export const startRegister = (
    name, lastName,  email,  telephone, password, confirm_password, setErrors = null) => {
    return async (dispatch) => {
        dispatch(startUILoading());

        email = email.toLowerCase();

        const resp = await Call(
            "/auth/register",
            "PUT",
            { name, lastName, email, telephone, password, confirm_password },
            false
        );

        if (resp.success) {
            const { access_token, user } = resp.success;

            localStorage.setItem("token", access_token);
            localStorage.setItem("token-init-date", new Date().getTime());

            dispatch(register(user));
        } else {
            errorHandler(resp, setErrors);
        }

        dispatch(stopUILoading());
    };
};

export const startRenew = () => {
    return async (dispatch) => {
        if (!localStorage.getItem("token")) {
            return dispatch(checkingFinish());
        }
        dispatch(startUILoading());
        const resp = await Call("/auth/renew");

        if (resp.success) {
            const { access_token, user } = resp.success;

            localStorage.setItem("token", access_token);
            localStorage.setItem("token-init-date", new Date().getTime());

            dispatch(login(user));
        } else {
            dispatch(checkingFinish());
        }
        dispatch(stopUILoading());
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    };
};

const login = (user) => ({
    type: types.authLogin,
    payload: { user },
});
const register = (user) => ({
    type: types.authRegister,
    payload: { user },
});
const checkingFinish = () => ({
    type: types.authCheckingFinish,
});
const logout = () => ({
    type: types.authLogout,
});
