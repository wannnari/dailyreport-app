import { Report } from "../types/report";

const RecentHistory = ({ histories }: { histories: Report[] }) => {
  const recent = histories.slice(0, 3);
  return (
    <div className="history-list">
      <h3 className="history-title">直近3件</h3>
      {histories.length == 0 && <div className="history-item">保存された履歴はありません</div>}
      {recent.map((history, index) => (
        <div key={index} className="history-item">
          <div className="history-date">{history.date}</div>
          <div>
            {history.inTime}~{history.outTime}({history.overTime})
          </div>
          <div>{history.workStyle}</div>
          <div>{history.memo}</div>
        </div>
      ))}
    </div>
  );
};

export default RecentHistory;
