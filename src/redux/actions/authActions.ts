import { ActionTypes } from "../constants/action-types";

export const toggleSidebar = (email: string) => {
    return {
        type: ActionTypes.SET_USER,
        payload: email,
    };
};
