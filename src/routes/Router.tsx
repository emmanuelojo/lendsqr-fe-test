import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import UsersList from "../pages/UsersList";
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
                    <Route path="/users" element={<UsersList />} />
                    <Route path="/guarantors" element={<OtherPages />} />
                    <Route path="/loans" element={<OtherPages />} />
                    <Route path="/decision-models" element={<OtherPages />} />
                    <Route path="/savings" element={<OtherPages />} />
                    <Route path="/loan-requests" element={<OtherPages />} />
                    <Route path="/whitelist" element={<OtherPages />} />
                    <Route path="/karma" element={<OtherPages />} />
                    <Route path="/organizations" element={<OtherPages />} />
                    <Route path="/loan-products" element={<OtherPages />} />
                    <Route path="/savings-products" element={<OtherPages />} />
                    <Route path="/fees-charges" element={<OtherPages />} />
                    <Route path="/transactions" element={<OtherPages />} />
                    <Route path="/services" element={<OtherPages />} />
                    <Route path="/service-account" element={<OtherPages />} />
                    <Route path="/settlements" element={<OtherPages />} />
                    <Route path="/reports" element={<OtherPages />} />
                    <Route path="/preferences" element={<OtherPages />} />
                    <Route path="/fee-pricing" element={<OtherPages />} />
                    <Route path="/audit-logs" element={<OtherPages />} />
                    <Route path="/system-messages" element={<OtherPages />} />
                </Route>
                <Route path="*" element={<Page404 />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
