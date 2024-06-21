import "../styles/action-button.scss";

interface Props {
    type: string;
    text: string;
    loading?: boolean;
}

const ActionButton = ({ type, text, loading }: Props) => {
    return <button className={`action-button ${type}`}>{loading ? "..." : text}</button>;
};

export default ActionButton;
