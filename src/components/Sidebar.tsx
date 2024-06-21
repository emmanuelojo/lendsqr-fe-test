import "../styles/sidebar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import BriefCase1 from "../assets/icons/briefcase.png";
import BriefCase2 from "../assets/icons/briefcase2.png";
import HomeIcon from "../assets/icons/home.png";
import UserFriendsIcon from "../assets/icons/user-friends.png";
import GuarantorIcon from "../assets/icons/users.png";
import SackIcon from "../assets/icons/sack.png";
import HandshakeIcon from "../assets/icons/handshake.png";
import PiggyBankIcon from "../assets/icons/piggy-bank.png";
import LoanIcon from "../assets/icons/loan.png";
import WhitelistIcon from "../assets/icons/user-check.png";
import KarmaIcon from "../assets/icons/user-times.png";
import SavingsIcon from "../assets/icons/savings.png";
import CoinsIcon from "../assets/icons/coins-solid.png";
import TransactionsIcon from "../assets/icons/transactions.png";
import ServicesIcon from "../assets/icons/services-icon.png";
import ServiceAccountIcon from "../assets/icons/user-cog.png";
import ScrollIcon from "../assets/icons/scroll.png";
import ChartBarIcon from "../assets/icons/chart-bar.png";
import PreferencesIcon from "../assets/icons/preferences.png";
import FeesPricingIcon from "../assets/icons/fees-pricing.png";
import AuditIcon from "../assets/icons/clipboard-list.png";
import SystemMessagesIcon from "../assets/icons/system-messages.png";
import LogoutIcon from "../assets/icons/logout.png";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { toggleSidebarVisible } from "../redux/slice/sidebarSlice";

const Sidebar = () => {
    const sidebarStatus = useAppSelector((store) => store.sidebar.sidebarVisible);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const customersMenuItems = [
        { name: "Users", icon: UserFriendsIcon, link: "/users" },
        { name: "Guarantors", icon: GuarantorIcon, link: "/guarantors" },
        { name: "Loans", icon: SackIcon, link: "/loans" },
        { name: "Decision Models", icon: HandshakeIcon, link: "/decision-models" },
        { name: "Savings", icon: PiggyBankIcon, link: "/savings" },
        { name: "Loan Requests", icon: LoanIcon, link: "/loan-requests" },
        { name: "Whitelist", icon: WhitelistIcon, link: "/whitelist" },
        { name: "Karma", icon: KarmaIcon, link: "/karma" },
    ];

    const businessMenuItems = [
        { name: "Organization", icon: BriefCase2, link: "/organization" },
        { name: "Loan Products", icon: LoanIcon, link: "/loan-products" },
        { name: "Savings Products", icon: SavingsIcon, link: "/savings-products" },
        { name: "Fees and Charges", icon: CoinsIcon, link: "/fees-charges" },
        { name: "Transactions", icon: TransactionsIcon, link: "/transactions" },
        { name: "Services", icon: ServicesIcon, link: "/services" },
        { name: "Service Account", icon: ServiceAccountIcon, link: "/service-account" },
        { name: "Settlements", icon: ScrollIcon, link: "/settlements" },
        { name: "Reports", icon: ChartBarIcon, link: "/reports" },
    ];

    const settingsMenuItems = [
        { name: "Preferences", icon: PreferencesIcon, link: "/preferences" },
        { name: "Fee and Pricing", icon: FeesPricingIcon, link: "/fee-pricing" },
        { name: "Audit Logs", icon: AuditIcon, link: "/audit-logs" },
        { name: "System Messages", icon: SystemMessagesIcon, link: "/system-messages" },
    ];

    const closeSidebar = () => {
        dispatch(toggleSidebarVisible(false));
    };

    const logout = () => {
        dispatch(toggleSidebarVisible(false));
        localStorage.clear();
        navigate("/login");
    };

    return (
        <aside className={`sidebar ${sidebarStatus ? "open" : ""}`}>
            <div className="wrapper hide-scrollbar">
                <header>
                    <NavLink to="/" onClick={closeSidebar}>
                        <img src={Logo} alt="logo" className="" />
                    </NavLink>
                </header>

                <div className="inner">
                    <div className="organization">
                        <img src={BriefCase1} alt="Organization icon" />
                        <select name="" id="">
                            <option value="" className="sidebar-text">
                                Switch Organization
                            </option>
                        </select>
                    </div>

                    <div className="dashboard">
                        <NavLink to="/" onClick={closeSidebar}>
                            <div>
                                <div className="bar"></div>
                                <img src={HomeIcon} alt="Home Icon" />
                                <p className="sidebar-text">Dashboard</p>
                            </div>
                        </NavLink>
                    </div>

                    <section>
                        <h3 className="section-header">CUSTOMERS</h3>
                        <div className="main-nav">
                            {customersMenuItems.map((item, index) => {
                                return (
                                    <NavLink to={item.link} key={index} onClick={closeSidebar}>
                                        <div>
                                            <div className="bar"></div>
                                            <img src={item.icon} alt={`${item.name} icon`} />
                                            <p className="sidebar-text">{item.name}</p>
                                        </div>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </section>

                    <section>
                        <h3 className="section-header">BUSINESSES</h3>
                        <div className="main-nav">
                            {businessMenuItems.map((item, index) => {
                                return (
                                    <NavLink to={item.link} key={index} onClick={closeSidebar}>
                                        <div>
                                            <div className="bar"></div>
                                            <img src={item.icon} alt={`${item.name} icon`} />
                                            <p className="sidebar-text">{item.name}</p>
                                        </div>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </section>

                    <section>
                        <h3 className="section-header">SETTINGS</h3>
                        <div className="main-nav">
                            {settingsMenuItems.map((item, index) => {
                                return (
                                    <NavLink to={item.link} key={index} onClick={closeSidebar}>
                                        <div>
                                            <div className="bar"></div>
                                            <img src={item.icon} alt={`${item.name} icon`} />
                                            <p className="sidebar-text">{item.name}</p>
                                        </div>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </section>

                    <section className="logout-section">
                        <div onClick={logout} className="logout">
                            <img src={LogoutIcon} alt="Logout icon" />
                            <p className="sidebar-text">Logout</p>
                        </div>

                        <p className="app-version">v1.2.0</p>
                    </section>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
