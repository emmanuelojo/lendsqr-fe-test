import { useState } from "react";
import Logo from "../assets/images/logo.png";
import LoginImage from "../assets/images/sign-in.jpg";
import "../styles/login.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { setUserEmail } from "../redux/slice/authSlice";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogin = () => {
        if (!email || !password) return;

        const data = {
            email,
            password,
        };

        dispatch(setUserEmail(data.email));
        localStorage.setItem("auth", "true");

        navigate("/");
    };
    return (
        <div className="login">
            <div className="logo-wrapper">
                <img src={Logo} alt="Logo" className="logo" />
            </div>

            <div className="main-wrapper">
                <div className="login-image-wrapper">
                    <img src={LoginImage} alt="Login Image" className="login-image" />
                </div>

                <div className="form-wrapper">
                    <div className="header-text">
                        <h1>Welcome!</h1>
                        <p>Enter details to login.</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            value={email}
                            placeholder="Email"
                            className="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className="password-wrapper">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span onClick={() => setPasswordVisible(!passwordVisible)}>
                                {passwordVisible ? "hide" : "show"}
                            </span>
                        </div>

                        <a href="/" className="forgot-password">
                            Forgot PASSWORD?
                        </a>

                        <button onClick={handleLogin} className="login-button">
                            LOG IN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
