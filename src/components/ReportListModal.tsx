import type { Report } from "../types/report";

type Props = {
  reports: Report[];
  onClose: () => void;
  onSelect: (report: Report) => void;
  onEdit: (report: Report) => void;
  onDelete: (id: string) => void;
};

const ReportListModal = ({
  reports,
  onClose,
  onSelect,
  onEdit,
  onDelete,
}: Props) => {
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
          <div className="history-notice">※ 反映時、所感は引き継がれません</div>
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

                <div className="history-actions">
                  <button
                    className="action-button reflect"
                    onClick={() => onSelect(report)}
                  >
                    反映
                  </button>

                  <button
                    className="action-button edit"
                    onClick={() => {
                      console.log("edit", report);
                      onEdit(report);
                    }}
                  >
                    編集
                  </button>

                  <button
                    className="action-button delete"
                    onClick={() => {
                      console.log("delete", report.id);
                      onDelete(report.id);
                    }}
                  >
                    削除
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportListModal;
