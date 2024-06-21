import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import OtherPages from "../pages/OtherPages";
import Page404 from "../pages/Page404";
import ProtectedRoutes from "./ProtectedRoutes";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route element={<ProtectedRoutes />}>
                    <Route path="/" element={<OtherPages />} />
                </Route>
                <Route path="*" element={<Page404 />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
