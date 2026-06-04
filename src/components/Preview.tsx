import "../App.css";
import { Report } from "../types/report";
import { formatDateMMDDwithDay } from "../utils/formatDateMMDDwithDay";
import {copyToClipboard } from "../utils/CopyToClipboard";
import { buildReportText } from "../utils/buildReportText";

type Props = {
  report: Report;
  onClose: () => void;
};

const Preview = ({report, onClose}: Props) => {
  const date = formatDateMMDDwithDay(report.date);
  const reportText = buildReportText(report);
  return (
    <div className="modal-overlay" id="previewModal" aria-hidden="true" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div className="modal-header">
          <h2 id="modalTitle">プレビュー</h2>
          <button className="close-button" id="closePreviewButton">
            閉じる
          </button>
        </div>
        <div className="preview-box" id="modalPreview" >
        <p>① {date} {report.inTime}~{report.outTime}</p>
        <p>② {report.projectName}/{report.clientName}/{report.workPlace}({report.workStyle})</p>
        <p>③ {report.workMemo}</p>
        <p>④ {report.memo}</p>
        <p>⑤ {report.overTime}</p>
        </div>
        <div className="modal-actions">
          <button className="secondary" id="modalCloseButton" onClick={onClose}>
            戻る
          </button>
          <button className="primary" id="modalCopyButton" onClick={()=>copyToClipboard(reportText)}>
            📋 コピー
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
