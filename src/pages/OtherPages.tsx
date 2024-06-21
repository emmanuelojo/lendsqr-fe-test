import "../styles/other-pages.scss";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const OtherPages = () => {
    return (
        <div>
            <div className="screen">
                <Sidebar />

                <div>
                    <Navbar />
                    <div className="container other-pages">
                        <p>Content appears here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherPages;
