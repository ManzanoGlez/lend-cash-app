import { types } from "../types";

const initialState = {
    checking: true,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
        case types.authRegister:
            return {
                ...state,
                checking: false,
                user: action.payload.user,
            };
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false,
            };
        case types.authLogout:
            return {
                checking: false,
            };

        default:
            return state;
    }
};
