import { Link } from "react-router-dom";
import "../styles/page-404.scss";

function Page404() {
    return (
        <div className="page-404">
            <h1>The page is not found.</h1>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
}

export default Page404;
