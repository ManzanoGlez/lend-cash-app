import { Call } from "../../helpers/fetch";
import { types } from "../types";
import { startUILoading, stopUILoading } from "./ui";

export const startShowUsers = ({ page, query, number_rows }) => {
    return async (dispatch, getState) => {
        if (query.length % 2 !== 0) {
            return;
        }

        dispatch(startUILoading());

        setTimeout(async () => {
            const params = new URLSearchParams();

            params.set("page", page);
            params.set("q", query);
            params.set("number_rows", number_rows);

            const resp = await Call("users", "GET", params.toString());

            if (resp.success) {
                const { users } = resp.success;

                const data = users.data;
                delete users.data;
                const pagination = users;

                dispatch(show(data, pagination));
            }

            dispatch(stopUILoading());
        }, 150);
    };
};

const show = (data, pagination) => ({
    type: types.userShow,
    payload: { data, pagination },
});
