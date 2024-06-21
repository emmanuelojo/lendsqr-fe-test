import { useEffect, useState } from "react";
import "../styles/users.scss";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import PaginationComponent from "../components/PaginationComponent";
import TableRowItem from "../components/TableRowItem";
import TableHeader from "../components/TableHeader";
import FilterModal from "../components/FilterModal";
import UsersIcon from "../assets/icons/stats-icon-1.png";
import ActiveUsersIcon from "../assets/icons/stats-icon-2.png";
import UsersWithLoanIcon from "../assets/icons/stats-icon-3.png";
import UsersWithSavingsIcon from "../assets/icons/stats-icon-4.png";
import usersData from "../data/users.json";
import { User } from "../types/User";
import { FilterData } from "../types/Filter";

const UsersList = () => {
    const usersList = usersData;
    const [filterVisible, setFilterVisible] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [limit, setLimit] = useState(20);
    const [totalCount, setTotalCount] = useState(0);
    const [totalActiveUsers, setTotalActiveUsers] = useState(0);
    const [totalUsersWithLoans, setTotalUsersWithLoans] = useState(0);
    const [totalUsersWithSavings, setTotalUsersWithSavings] = useState(0);
    const [companies, setCompanies] = useState<string[]>([]);
    const [toggleSortByOrganization, setToggleSortByOrganization] = useState(false);
    const [toggleSortByUsername, setToggleSortByUsername] = useState(false);
    const [toggleSortByEmail, setToggleSortByEmail] = useState(false);
    const [toggleSortByMobile, setToggleSortByMobile] = useState(false);
    const [toggleSortByDate, setToggleSortByDate] = useState(false);
    const [toggleSortByStatus, setToggleSortByStatus] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const statsList = [
        {
            title: "Users",
            text: totalCount,
            icon: UsersIcon,
        },
        {
            title: "Active Users",
            text: totalActiveUsers,
            icon: ActiveUsersIcon,
        },
        {
            title: "Users with loans",
            text: totalUsersWithLoans,
            icon: UsersWithLoanIcon,
        },
        {
            title: "Users with savings",
            text: totalUsersWithSavings,
            icon: UsersWithSavingsIcon,
        },
    ];

    const limitOptions = [10, 20, 50, 100, 200, 500];

    const handleClick = () => {
        setFilterVisible(true);
    };

    const updateLimit = (payload: number) => {
        setLimit(payload);
        setUsers(usersList.slice(0, payload));
        setTotalPages(Math.floor(Math.ceil(usersList.length / payload)));
    };

    const updateTotalPages = () => {
        setTotalPages(Math.floor(Math.ceil(usersList.length / limit)));
    };

    const handleFilter = (data: FilterData) => {
        setFilterVisible(false);
        let filteredData: User[] = [];

        if (
            data.organization.length < 1 &&
            data.username.length < 1 &&
            data.email.length < 1 &&
            data.mobile.length < 1 &&
            data.status.length < 1
        ) {
            setUsers(usersList.slice(0, limit));
        } else {
            if (data.organization.length > 0) {
                filteredData = usersList.filter(
                    (user) => user.company.toLowerCase() === data.organization.toLowerCase()
                );
            }

            if (data.username.length > 0) {
                if (filteredData.length > 0) {
                    filteredData = filteredData.filter((user) =>
                        user.username.toLowerCase().includes(data.username.toLowerCase())
                    );
                } else {
                    filteredData = usersList.filter((user) =>
                        user.username.toLowerCase().includes(data.username.toLowerCase())
                    );
                }
            }

            if (data.email.length > 0) {
                if (filteredData.length > 0) {
                    filteredData = filteredData.filter((user) =>
                        user.email.toLowerCase().includes(data.email.toLowerCase())
                    );
                } else {
                    filteredData = usersList.filter((user) =>
                        user.email.toLowerCase().includes(data.email.toLowerCase())
                    );
                }
            }

            if (data.mobile.length > 0) {
                if (filteredData.length > 0) {
                    filteredData = filteredData.filter((user) => user.phone.includes(data.mobile));
                } else {
                    filteredData = usersList.filter((user) => user.phone.includes(data.mobile));
                }
            }

            if (data.status.length > 0) {
                if (filteredData.length > 0) {
                    filteredData = filteredData.filter((user) => user.status === data.status);
                } else {
                    filteredData = usersList.filter((user) => user.status === data.status);
                }
            }
            setUsers(filteredData);
        }

        setTotalPages(Math.floor(Math.ceil(users.length / limit)));
    };

    const sortByOrganization = () => {
        setToggleSortByOrganization(!toggleSortByOrganization);
        let list: User[] = [];
        if (toggleSortByOrganization) {
            list = users.sort((a, b) => (a.company > b.company ? 1 : -1));
        } else {
            list = users.sort((a, b) => (a.company < b.company ? 1 : -1));
        }
        setUsers(list);
    };

    const sortByUsername = () => {
        setToggleSortByUsername(!toggleSortByUsername);
        let list: User[] = [];
        if (toggleSortByUsername) {
            list = users.sort((a, b) => (a.username > b.username ? 1 : -1));
        } else {
            list = users.sort((a, b) => (a.username < b.username ? 1 : -1));
        }
        setUsers(list);
    };

    const sortByEmail = () => {
        setToggleSortByEmail(!toggleSortByEmail);
        let list: User[] = [];
        if (toggleSortByEmail) {
            list = users.sort((a, b) => (a.email > b.email ? 1 : -1));
        } else {
            list = users.sort((a, b) => (a.email < b.email ? 1 : -1));
        }
        setUsers(list);
    };

    const sortByMobile = () => {
        setToggleSortByMobile(!toggleSortByMobile);
        let list: User[] = [];
        if (toggleSortByMobile) {
            list = users.sort((a, b) => (a.phone > b.phone ? 1 : -1));
        } else {
            list = users.sort((a, b) => (a.phone < b.phone ? 1 : -1));
        }
        setUsers(list);
    };

    const sortByDateJoined = () => {
        setToggleSortByDate(!toggleSortByDate);
        let list: User[] = [];
        if (toggleSortByDate) {
            list = users.sort((a, b) => (a.dateJoined > b.dateJoined ? 1 : -1));
        } else {
            list = users.sort((a, b) => (a.dateJoined < b.dateJoined ? 1 : -1));
        }
        setUsers(list);
    };

    const sortByStatus = () => {
        setToggleSortByStatus(!toggleSortByStatus);
        let list: User[] = [];
        if (toggleSortByStatus) {
            list = users.sort((a, b) => (a.status > b.status ? 1 : -1));
        } else {
            list = users.sort((a, b) => (a.status < b.status ? 1 : -1));
        }
        setUsers(list);
    };

    const handlePageChange = (num: number) => {
        setCurrentPage(num);
        const skipCount = (num - 1) * limit;
        setUsers(usersList.slice(skipCount, skipCount + limit));
    };

    useEffect(() => {
        setUsers(usersList.slice(0, limit));
        setTotalCount(usersList.length);
        const activeUsers = usersList.filter((user) => user.status === "active");
        setTotalActiveUsers(activeUsers.length);
        setTotalUsersWithLoans(12453);
        setTotalUsersWithSavings(102453);
        updateTotalPages();

        const companiesList = usersList.map((user) => user.company);
        setCompanies(companiesList);
    }, [usersData]);

    return (
        <div className="users">
            <div className="screen">
                <Sidebar />

                <div>
                    <Navbar />

                    <div className="users-wrapper">
                        <div className="stats hide-scrollbar">
                            {statsList &&
                                statsList.map((stat, index) => (
                                    <StatsCard key={index} title={stat.title} text={stat.text} icon={stat.icon} />
                                ))}
                        </div>

                        <div className="card users-table">
                            {filterVisible && (
                                <FilterModal
                                    companies={companies}
                                    emitData={handleFilter}
                                    closeModal={() => setFilterVisible(false)}
                                />
                            )}

                            <TableHeader
                                openFilterModal={handleClick}
                                onClickSortByOrganization={sortByOrganization}
                                onClickSortByUsername={sortByUsername}
                                onClickSortByEmail={sortByEmail}
                                onClickSortByMobile={sortByMobile}
                                onClickSortByDateJoined={sortByDateJoined}
                                onClickSortByStatus={sortByStatus}
                            />
                            {users &&
                                users.map((user, index) => (
                                    <TableRowItem key={index} user={user} isLastRow={index === limit - 1} />
                                ))}

                            {!users.length && (
                                <div className="no-user">
                                    {" "}
                                    <p>No user found</p>{" "}
                                </div>
                            )}
                        </div>

                        <div className="pagination">
                            <div className="limit-wrapper">
                                <p>Showing</p>

                                <div className="select">
                                    <select name="" id="" value={limit} onChange={(e) => updateLimit(+e.target.value)}>
                                        {limitOptions &&
                                            limitOptions.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                <p>of {usersList.length}</p>
                            </div>

                            <PaginationComponent
                                totalPages={totalPages}
                                currentPage={currentPage}
                                pageClicked={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersList;
