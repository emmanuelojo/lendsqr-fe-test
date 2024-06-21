import { ActionTypes } from "../constants/action-types";

const initialState = {
    sidebarIsOpen: false,
};

export const sidebarReducer = (state = initialState, { type }: { type: string }) => {
    switch (type) {
        case ActionTypes.TOGGLE_SIDE_BAR:
            return state.sidebarIsOpen;

        default:
            return state.sidebarIsOpen;
    }
};
