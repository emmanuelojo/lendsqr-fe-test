import { ActionTypes } from "../constants/action-types";

export const toggleSidebar = (status: boolean) => {
    return {
        type: ActionTypes.TOGGLE_SIDE_BAR,
        payload: status,
    };
};
