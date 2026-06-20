import PreviewContent from "./PreviewContent";
import NoticeSection from "./NoticeSection";
import RecentHistory from "./RecentHistory";
import { Report } from "../types/report";

const PreviewPanel = ({
  report,
  histories,
}: {
  report: Report;
  histories: Report[];
}) => {
  return (
    <section className="card preview-panel">
      <h2 section-heading>プレビュー</h2>
      <PreviewContent report={report} />
      <NoticeSection />
      <RecentHistory histories={histories} />
    </section>
  );
};

export default PreviewPanel;
