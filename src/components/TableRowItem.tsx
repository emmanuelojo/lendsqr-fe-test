import "../styles/table-row-item.scss";
import Ellipsis from "../assets/icons/ellipsis-v.png";
import EyeIcon from "../assets/icons/eye-icon.png";
import BlackListUserIcon from "../assets/icons/blacklist-user-icon.png";
import ActivateUserIcon from "../assets/icons/activate-user-icon.png";
import { useNavigate } from "react-router-dom";
import { User } from "../types/User";
import { formatDateShort } from "../helpers/dateHelper";
import StatusPill from "./StatusPill";
import { truncateString } from "../helpers/stringHelper";

interface Props {
    user: User;
    isLastRow?: boolean;
}

const TableRowItem = ({ user, isLastRow }: Props) => {
    const navigate = useNavigate();

    const viewDetails = () => {
        navigate(`/users/${user._id}`);
    };

    const blackListUser = () => {};

    const activateUser = () => {};
    return (
        <div className={`table-row ${isLastRow ? "last-row" : ""}`}>
            <div className="organization">
                <p>{user.company}</p>
            </div>
            <div onClick={viewDetails} className="username">
                {" "}
                <p>{user.username} </p>{" "}
            </div>
            <div className="email">
                {" "}
                <p> {truncateString(user.email, 20)} </p>{" "}
            </div>
            <div className="mobile">
                {" "}
                <p> {user.phone} </p>{" "}
            </div>
            <div className="date">
                {" "}
                <p> {formatDateShort(user.dateJoined)}</p>
            </div>
            <div className="status">
                <StatusPill status={user.status} />
            </div>
            <div className="more">
                <img src={Ellipsis} alt="More" />

                <div className="more-view">
                    <div onClick={viewDetails}>
                        <img src={EyeIcon} alt="Eye icon" />
                        <p>View Details</p>
                    </div>

                    <div onClick={blackListUser}>
                        <img src={BlackListUserIcon} alt="Blacklist User icon" />
                        <p>Blacklist User</p>
                    </div>

                    <div onClick={activateUser}>
                        <img src={ActivateUserIcon} alt="Activate User icon" />
                        <p>Activate User</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableRowItem;
