import { ActionTypes } from "../constants/action-types";

const initialState = {
    email: "",
};

export const authReducer = (state = initialState, { type }: { type: string }) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return state.email;

        default:
            return state.email;
    }
};
