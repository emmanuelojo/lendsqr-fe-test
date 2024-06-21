import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { sidebarReducer } from "./sidebarReducer";

const reducers = combineReducers({
    user: authReducer,
    sidebar: sidebarReducer,
});

export default reducers;
