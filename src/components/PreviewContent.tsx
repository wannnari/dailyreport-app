import "../App.css";
import { Report } from "../types/report";
import { formatDateMMDDwithDay } from "../utils/formatDateMMDDwithDay";

const PreviewContent = ({ report, estimatedMinutes }: { report: Report, estimatedMinutes:String }) => {
  const date = formatDateMMDDwithDay(report.date);
  return (
    <div>
      <div className="preview-box" id="modalPreview">
        <p>
          ① {date} {report.inTime}~{report.outTime}
        </p>
        <p>
          ② {report.projectName}/{report.clientName}/{report.workPlace}(
          {report.workStyle})
        </p>
        <p>③ {report.workMemo}</p>
        <p>④ {report.memo}</p>
        <p>⑤ {estimatedMinutes}</p>
      </div>
    </div>
  );
};

export default PreviewContent;
