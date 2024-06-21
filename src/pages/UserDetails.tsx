import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../styles/user-details.scss";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ActionButton from "../components/ActionButton";
import UserIcon from "../assets/icons/user-icon.png";
import BackArrowIcon from "../assets/icons/back-arrow.png";
import StarFilledIcon from "../assets/icons/star-filled.png";
import StarIcon from "../assets/icons/star.png";
import UserGeneralDetailsTab from "../components/UserGeneralDetailsTab";
import UserDocumentsTab from "../components/UserDocumentsTab";
import UserLoansTab from "../components/UserLoansTab";
import UserSavingsTab from "../components/UserSavingsTab";
import AppAndSystemTab from "../components/AppAndSystemTab";
import UserBankDetailsTab from "../components/UserBankDetailsTab";
import { User } from "../types/User";
import usersData from "../data/users.json";

const UserDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("General Details");
    const [user, setUser] = useState<User | null>(null);

    const usersList = usersData;
    const tabItems = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"];

    const backToUsers = () => {
        navigate("/users");
    };

    useEffect(() => {
        if (id) {
            const found = usersList.filter((user) => user._id === id)[0];

            if (found) {
                setUser(found);
            }
        }
    }, [id]);
    return (
        <div className="user-details">
            <div className="screen">
                <Sidebar />

                <div>
                    <Navbar />
                    {user === null && (
                        <div className="container">
                            <div className="user-profile">
                                <div onClick={backToUsers} className="back">
                                    <img src={BackArrowIcon} alt="Back arrow icon" />
                                    <p>Back to Users</p>
                                </div>

                                <div className="not-found-wrapper">
                                    <p>User not found...</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {user && (
                        <div className="container">
                            <div className="user-profile">
                                <div onClick={backToUsers} className="back">
                                    <img src={BackArrowIcon} alt="Back arrow icon" />
                                    <p>Back to Users</p>
                                </div>

                                <div className="panel">
                                    <h1>User Details</h1>

                                    <div className="cta-buttons">
                                        <ActionButton text="Blacklist User" type="danger" />
                                        <ActionButton text="Activate User" type="success" />
                                    </div>
                                </div>

                                <div className="card summary">
                                    <div className="brief">
                                        <div className="name-icon">
                                            <div className="user-icon">
                                                <img src={UserIcon} alt="User icon" />
                                            </div>

                                            <div className="name-wrapper">
                                                <p className="name"> {user?.username} </p>
                                                <p className="uid">LSQFf587g90 </p>
                                            </div>
                                        </div>

                                        <div className="tier">
                                            <p>User's Tier</p>

                                            <div className="stars">
                                                <img src={StarFilledIcon} alt="Star icon" />
                                                <img src={StarIcon} alt="Star icon" />
                                                <img src={StarIcon} alt="Star icon" />
                                            </div>
                                        </div>

                                        <div className="bank">
                                            <p className="amount">{user?.balance}</p>
                                            <p className="account-details">9912345678/Providus Bank</p>
                                        </div>
                                    </div>

                                    <div className="tabs-controls hide-scrollbar">
                                        {tabItems &&
                                            tabItems.map((tab, index) => (
                                                <div
                                                    key={index}
                                                    className={`tab ${activeTab === tab ? "active" : ""}`}
                                                    onClick={() => setActiveTab(tab)}
                                                >
                                                    <p>{tab}</p>
                                                    <div
                                                        className={`active-bar ${activeTab === tab ? "active" : ""}`}
                                                    ></div>
                                                </div>
                                            ))}
                                    </div>
                                </div>

                                <div className="tab-screen">
                                    {activeTab === tabItems[0] && <UserGeneralDetailsTab user={user} />}
                                    {activeTab === tabItems[1] && <UserDocumentsTab />}
                                    {activeTab === tabItems[2] && <UserBankDetailsTab />}
                                    {activeTab === tabItems[3] && <UserLoansTab />}
                                    {activeTab === tabItems[4] && <UserSavingsTab />}
                                    {activeTab === tabItems[5] && <AppAndSystemTab />}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
