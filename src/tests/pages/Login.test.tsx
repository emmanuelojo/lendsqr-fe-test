// @ts-nocheck
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../../pages/Login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({
    auth: {
        email: "",
    },
});
describe("Login component tests", () => {
    it("Renders correctly initial document", async () => {
        const store = mockStore({
            auth: {
                email: "",
            },
        });

        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );
        const loginLabel = screen.getByText("Welcome!");

        expect(loginLabel).toBeInTheDocument();
    });

    it("updates email input field incorrectly", () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );

        const emailInput = screen.getByPlaceholderText("Email");
        fireEvent.change(emailInput, { target: { value: "user" } });

        expect(emailInput.value).toContain("@");
    });

    it("updates email input field correctly", () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );

        const emailInput = screen.getByPlaceholderText("Email");
        fireEvent.change(emailInput, { target: { value: "user@mail.com" } });

        expect(emailInput.value).toBe("user@mail.com");
    });

    it("updates password input field correctly", () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );

        const passwordInput = screen.getByPlaceholderText("Password");
        fireEvent.change(passwordInput, { target: { value: "testpassword" } });

        expect(passwordInput.value).toBe("testpassword");
    });

    it("call handleLogin function when button is clicked", () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );

        const emailInput = screen.getByPlaceholderText("Email");
        const passwordInput = screen.getByPlaceholderText("Password");
        const loginButton = screen.getByText("LOG IN");

        fireEvent.change(emailInput, { target: { value: "user@mail.com" } });
        fireEvent.change(passwordInput, { target: { value: "testpassword" } });
        fireEvent.click(loginButton);
    });
});
