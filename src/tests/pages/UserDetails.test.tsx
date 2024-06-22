// @ts-nocheck
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserDetails from "../../pages/UserDetails";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

test("fetches and displays user data", () => {
    const mockResponse = { data: { name: "John Doe" } };
    const store = mockStore({
        user: {
            id: 1,
            name: "Random Guy",
            username: "Agba dev",
        },
        sidebar: {
            sidebarVisible: false,
        },
    });
    render(
        <MemoryRouter>
            <Provider store={store}>
                <UserDetails />
            </Provider>
        </MemoryRouter>
    );
});
