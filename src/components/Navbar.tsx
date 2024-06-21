import { useEffect, useState } from "react";
import "../styles/navbar.scss";
import UserImage from "../assets/images/user-image.png";
import SearchIcon from "../assets/icons/search-icon.png";
import BellIcon from "../assets/icons/bell-icon.png";
import CaretDownIcon from "../assets/icons/caret-down-icon.png";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { toggleSidebarVisible } from "../redux/slice/sidebarSlice";
import { truncateString } from "../helpers/stringHelper";

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [userEmail, setEmail] = useState("");
    const sidebarStatus = useAppSelector((store) => store.sidebar.sidebarVisible);
    const dispatch = useAppDispatch();

    const toggleSidebar = () => {
        dispatch(toggleSidebarVisible(!openSidebar));
        setOpenSidebar(!openSidebar);
    };

    useEffect(() => {
        let mail = localStorage.getItem("email");
        mail ? setEmail(mail) : setEmail("Adedeji");
    }, []);

    return (
        <nav>
            <div className="search">
                <input type="text" placeholder="Search for anything" />

                <div className="search-icon">
                    <img src={SearchIcon} alt="Search icon" />
                </div>
            </div>

            <div className="right-section">
                <Link to="/">Docs</Link>

                <div className="notification">
                    <img src={BellIcon} alt="Bell icon" />
                </div>

                <div className="user-section">
                    <div className="user-image">
                        <img src={UserImage} alt="User Image" />
                    </div>

                    <div className="profile">
                        <p className="user-name"> {truncateString(userEmail, 10)} </p>

                        <div className="caret-down-icon">
                            <img src={CaretDownIcon} alt="Caret Down icon" />
                        </div>
                    </div>
                </div>

                <div className="hamburger-wrapper" onClick={toggleSidebar}>
                    <button className={`hamburger ${sidebarStatus ? "active" : ""}`}>
                        <span className="line"> </span> <span className="line"> </span>
                        <span className="line"> </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
