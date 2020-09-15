import { types } from "../types";

export const startUILoading = () => ({
    type: types.uiStartLoading,
});

export const stopUILoading = () => ({
    type: types.uiStopLoading,
});

