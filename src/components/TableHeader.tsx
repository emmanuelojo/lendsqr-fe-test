import "../styles/table-header.scss";
import FilterIcon from "../assets/icons/filter.png";

interface Props {
    openFilterModal: () => void;
    onClickSortByOrganization: () => void;
    onClickSortByUsername: () => void;
    onClickSortByEmail: () => void;
    onClickSortByDateJoined: () => void;
    onClickSortByStatus: () => void;
    onClickSortByMobile: () => void;
}

const TableHeader = ({
    openFilterModal,
    onClickSortByOrganization,
    onClickSortByUsername,
    onClickSortByEmail,
    onClickSortByDateJoined,
    onClickSortByStatus,
    onClickSortByMobile,
}: Props) => {
    return (
        <div className="table-header">
            <div className="organization">
                <p onClick={openFilterModal}>Organization</p>
                <img src={FilterIcon} alt="Filter icon" onClick={onClickSortByOrganization} />
            </div>
            <div className="username">
                <p onClick={openFilterModal}>username</p>
                <img src={FilterIcon} alt="Filter icon" onClick={onClickSortByUsername} />
            </div>
            <div className="email">
                <p onClick={openFilterModal}>email</p>
                <img src={FilterIcon} alt="Filter icon" onClick={onClickSortByEmail} />
            </div>
            <div className="mobile">
                <p onClick={openFilterModal}>phone number</p>
                <img src={FilterIcon} alt="Filter icon" onClick={onClickSortByMobile} />
            </div>
            <div className="date">
                <p onClick={openFilterModal}>Date joined</p>
                <img src={FilterIcon} alt="Filter icon" onClick={onClickSortByDateJoined} />
            </div>
            <div className="status">
                <p onClick={openFilterModal}>Status</p>
                <img src={FilterIcon} alt="Filter icon" onClick={onClickSortByStatus} />
            </div>
            <div className="more"></div>
        </div>
    );
};

export default TableHeader;
