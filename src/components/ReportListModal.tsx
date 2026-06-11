import type { Report } from "../types/report";

type Props = {
  reports: Report[];
  onClose: () => void;
  onSelect: (report: Report) => void;
};

const ReportListModal = ({ reports, onClose, onSelect }: Props) => {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div
        className="listModalContent"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalHeader">
          <h2>履歴一覧</h2>
          <button className="secondary" onClick={onClose}>
            閉じる
          </button>
        </div>
        {reports.length === 0 ? (
          <p className="emptyText">保存された日報がありません。</p>
        ) : (
          <div className="history-list">
            {reports.map((report, index) => (
              <div className="history-item" key={`${report.date}-${index}`}>
                <div>
                  <div className="history-date">{report.date}</div>
                  <div className="history-summary">
                    ①{report.inTime}〜{report.outTime} / ②{report.projectName} /{" "}
                    ③{report.workPlace}（{report.workStyle}）/ ④
                    {report.workMemo} / ⑤{report.memo}
                  </div>
                </div>

                <button className="small-copy" onClick={() => onSelect(report)}>
                  反映
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportListModal;
