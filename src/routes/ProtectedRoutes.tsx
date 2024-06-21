import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
    const location = useLocation();
    let auth = localStorage.getItem("auth");

    return auth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoutes;
