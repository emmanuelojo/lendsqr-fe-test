import { capitalize } from "../helpers/stringHelper";
import "../styles/user-general-details-tab.scss";
import { User } from "../types/User";
import Divider from "./Divider";

interface Props {
    user: User;
}

const UserGeneralDetailsTab = ({ user }: Props) => {
    return (
        <div className="card general-details-tab">
            <div className="personal-info">
                <h3 className="header">Personal Information</h3>

                <div className="details">
                    <div className="detail">
                        <p>full Name</p>
                        <p> {user.name} </p>
                    </div>

                    <div className="detail">
                        <p>Phone Number</p>
                        <p> {user.phone} </p>
                    </div>

                    <div className="detail">
                        <p>Email Address</p>
                        <p> {user.email} </p>
                    </div>

                    <div className="detail">
                        <p>Bvn</p>
                        <p> {user.bvn} </p>
                    </div>

                    <div className="detail">
                        <p>Gender</p>
                        <p>{capitalize(user.gender)} </p>
                    </div>

                    <div className="detail">
                        <p>Marital status</p>
                        <p> {capitalize(user.maritalStatus)} </p>
                    </div>

                    <div className="detail">
                        <p>Children</p>
                        <p> {capitalize(user.children.toString())} </p>
                    </div>

                    <div className="detail">
                        <p>Type of residence</p>
                        <p> {user.typeOfResidence} </p>
                    </div>
                </div>
            </div>

            <Divider />

            <div className="edu-employment">
                <h3 className="header">Education and Employment</h3>

                <div className="details">
                    <div className="detail">
                        <p>level of education</p>
                        <p> {user.levelOfEducation} </p>
                    </div>

                    <div className="detail">
                        <p>employment status</p>
                        <p> {capitalize(user.employmentStatus)} </p>
                    </div>

                    <div className="detail">
                        <p>sector of employment</p>
                        <p>{user.employmentSector}</p>
                    </div>

                    <div className="detail">
                        <p>Duration of employment</p>
                        <p>{user.employmentDuration}</p>
                    </div>

                    <div className="detail">
                        <p>office email</p>
                        <p>{user.officeEmail}</p>
                    </div>

                    <div className="detail">
                        <p>Monthly income</p>
                        <p>{user.monthlyIncome}</p>
                    </div>

                    <div className="detail">
                        <p>loan repayment</p>
                        <p>₦{user.loanRepayment}</p>
                    </div>
                </div>
            </div>

            <Divider />

            <div className="socials">
                <h3 className="header">Socials</h3>

                <div className="details">
                    <div className="detail">
                        <p>Twitter</p>
                        <p>{user.twitter}</p>
                    </div>

                    <div className="detail">
                        <p>Facebook</p>
                        <p>{user.facebook}</p>
                    </div>

                    <div className="detail">
                        <p>Instagram</p>
                        <p>{user.instagram}</p>
                    </div>
                </div>
            </div>

            <Divider />

            <div className="guarantor">
                <h3 className="header">Guarantor</h3>

                <div className="details">
                    <div className="detail">
                        <p>full Name</p>
                        <p>{user.guarantorName}</p>
                    </div>

                    <div className="detail">
                        <p>Phone Number</p>
                        <p>{user.guarantorPhone}</p>
                    </div>

                    <div className="detail">
                        <p>Email Address</p>
                        <p>{user.guarantorEmail}</p>
                    </div>

                    <div className="detail">
                        <p>Relationship</p>
                        <p>{capitalize(user.guarantorRelationship)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserGeneralDetailsTab;
