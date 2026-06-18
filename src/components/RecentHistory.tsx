import { Report } from "../types/report";

const RecentHistory = ({ histories }: { histories: Report[] }) => {
  const recent = histories.slice(0, 3);
  return (
    <div className="history-title">
      <h3>直近3件</h3>

      {recent.map((history, index) => (
        <div key={index} className="history-item">
          <div className="history-date">{history.date}</div>
          <div>{history.projectName}</div>
          <div>{history.workStyle}</div>
        </div>
      ))}
    </div>
  );
};

export default RecentHistory;
