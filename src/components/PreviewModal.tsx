import PreviewContent from "./PreviewContent";
import { Report } from "../types/report";
import { copyToClipboard } from "../utils/CopyToClipboard";
import { buildReportText } from "../utils/buildReportText";

type Props = {
  report: Report;
  onClose: () => void;
  showMessage: (text: string) => void;
};

const PreviewModal = ({ report, onClose, showMessage }: Props) => {
  const reportText = buildReportText(report);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="preview-box" id="modalPreview">
          <h2>プレビュー</h2>
          <PreviewContent report={report} />
          <div className="modal-actions">
            <button
              className="secondary"
              id="modalCloseButton"
              onClick={onClose}
            >
              戻る
            </button>
            <button
              className="primary"
              id="modalCopyButton"
              onClick={() => {
                copyToClipboard(reportText);
                showMessage("保存しました");
                onClose();
              }}
            >
              📋 コピー
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
