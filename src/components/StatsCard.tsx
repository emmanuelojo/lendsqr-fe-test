import "../styles/stats-card.scss";
import { formatNumber } from "../helpers/numberHelper";

interface Props {
    title: string;
    text: string | number;
    icon: string;
}

const StatsCard = ({ title, text, icon }: Props) => {
    return (
        <div className="stats-card">
            <img src={icon} alt="icon" />

            <h1>{title}</h1>

            <p>{formatNumber(+text)}</p>
        </div>
    );
};

export default StatsCard;
