import { useState } from "react";
import "../styles/filter-modal.scss";
import { FilterData } from "../types/Filter";
import { capitalize } from "../helpers/stringHelper";

interface Props {
    companies: string[];
    emitData: (data: FilterData) => void;
    closeModal: () => void;
}

const FilterModal = ({ companies, emitData, closeModal }: Props) => {
    const [organization, setOrganization] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [mobile, setMobile] = useState("");
    const [status, setStatus] = useState("");

    const statusOptions = ["active", "inactive", "blacklisted", "pending"];

    const reset = () => {
        setOrganization("");
        setUsername("");
        setEmail("");
        setDate("");
        setMobile("");
        setStatus("");
    };

    const handleSubmit = () => {
        const data = { organization, username, email, date, mobile, status };
        emitData(data);
    };

    return (
        <div className="filter-modal">
            <div className="close" onClick={closeModal}>
                X
            </div>
            <div className="filter-option">
                <p>Organization</p>
                <div className="custom-border">
                    <select name="" id="" value={organization} onChange={(e) => setOrganization(e.target.value)}>
                        <option value="" disabled>
                            Select
                        </option>
                        {companies &&
                            companies.map((company, index) => (
                                <option key={index} value={company}>
                                    {company}
                                </option>
                            ))}
                    </select>
                </div>
            </div>

            <div className="filter-option">
                <p>Username</p>

                <input
                    type="text"
                    value={username}
                    placeholder="User"
                    onChange={(e) => setUsername(e.target.value)}
                    className="custom-border"
                />
            </div>

            <div className="filter-option">
                <p>Email</p>

                <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="custom-border"
                />
            </div>

            <div className="filter-option">
                <p>Date</p>

                <input
                    type="date"
                    value={date}
                    placeholder="Date"
                    onChange={(e) => setDate(e.target.value)}
                    className="custom-border"
                />
            </div>

            <div className="filter-option">
                <p>Phone Number</p>

                <input
                    type="text"
                    value={mobile}
                    placeholder="Phone Number"
                    onChange={(e) => setMobile(e.target.value)}
                    className="custom-border"
                />
            </div>

            <div className="filter-option">
                <p>Status</p>
                <div className="custom-border">
                    <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="" disabled>
                            Select
                        </option>
                        {statusOptions &&
                            statusOptions.map((status, index) => (
                                <option key={index} value={status}>
                                    {capitalize(status)}
                                </option>
                            ))}
                    </select>
                </div>{" "}
            </div>

            <div className="buttons">
                <button onClick={reset}>Reset</button>
                <button onClick={handleSubmit}>Filter</button>
            </div>
        </div>
    );
};

export default FilterModal;
