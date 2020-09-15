import { types } from "../types";

const initialState = {
   data:[],
   pagination:{},
   active: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.userShow:
            return {
                ...state,
                data: action.payload.data,
                pagination: action.payload.pagination,
            };
        case types.userAdd:
            return {
                ...state,
            };
        case types.userEdit:
            return {
                ...state,
            };
        case types.userDelete:
            return {
                ...state,
            };
        case types.userSetActive:
            return {
                ...state,
                active: action.payload.user,
            };
        case types.userUnsetActive:
            return {
                ...state,
                active: null,
            };

        default:
            return state;
    }
};
