import PreviewContent from "./PreviewContent";
import NoticeSection from "./NoticeSection";
import { Report } from "../types/report";

const PreviewPanel = ({ report }: { report: Report }) => {
  return (
    <section className="preview-panel">
      <h2>プレビュー</h2>
      <PreviewContent report={report} />
      <NoticeSection />
    </section>
  );
};

export default PreviewPanel;
