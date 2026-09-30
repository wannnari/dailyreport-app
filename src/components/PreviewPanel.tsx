import PreviewContent from "./PreviewContent";
import NoticeSection from "./NoticeSection";
import RecentHistory from "./RecentHistory";
import { Report } from "../types/report";

const PreviewPanel = ({
  report,
  histories,
  estimatedMinutes,
}: {
  report: Report;
  histories: Report[];
  estimatedMinutes: String;
}) => {
  return (
    <section className="card preview-panel">
      <h2 className="section-heading">プレビュー</h2>
      <PreviewContent report={report} estimatedMinutes={estimatedMinutes}/>
      <NoticeSection />
      <RecentHistory histories={histories} />
    </section>
  );
};

export default PreviewPanel;
