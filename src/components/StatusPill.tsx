import "../styles/status-pill.scss";

interface Props {
    status: string;
}

const StatusPill = ({ status }: Props) => {
    return <div className={`status-pill ${status}`}>{status}</div>;
};

export default StatusPill;
