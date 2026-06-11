import React, { useState, useEffect, ReactEventHandler } from "react";

import "../css/Report.css";
import "../App.css";

import { buildReportText } from "../utils/buildReportText";
import { calcWorkTime } from "../utils/calcWorkTime";
import { Report, InitialReport } from "../types/report";
import { TimeString } from "../types/Time";
import Preview from "./Preview";
import { calcOverTime } from "../utils/calcOverTime";
import { copyToClipboard } from "../utils/CopyToClipboard";
import ReportListModal from "../components/ReportListModal";

type Props = {
  report: Report;
  setReport: React.Dispatch<React.SetStateAction<Report>>;
};

export default function ReportForm({ report, setReport }: Props) {
  // const [errors, setErrors] = useState({ reportInput: "" });
  const [workStyle, setWorkStyle] = useState<string>("");
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const previewText = buildReportText(report);
  const [isListOpen, setIsListOpen] = useState(false);
  const [reports, setReports] = useState<Report[]>([]);

  // 開始・終了時間のonChangeイベント
  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReport((prev) => {
      const nextReport = {
        ...prev,
        [name]: value as TimeString,
      };
      return {
        ...nextReport,
        workTime: calcWorkTime(nextReport.inTime, nextReport.outTime),
        overTime: calcOverTime(nextReport.inTime, nextReport.outTime),
      };
    });
  };

  /**
   * Report項目Changeイベント(時間以外)
   * @param e
   */
  const handleReportChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setReport((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
   * 日報保存処理
   */
  const saveReport = () => {
    const reports = JSON.parse(
      localStorage.getItem("reports") ?? "[]",
    ) as Report[];

    const nextReports = [{ ...report }, ...reports];
    localStorage.setItem("reports", JSON.stringify(nextReports));
    localStorage.setItem("lastReport", JSON.stringify(report));

    alert("保存しました");
  };

  /**
   * 前回の日報読み込み処理
   */
  const loadLastReport = () => {
    const data = localStorage.getItem("lastReport");
    if (!data) {
      alert("保存された日報がありません");
      return;
    }
    const lastReoprt: Report = JSON.parse(data) as Report;
    setReport({
      ...InitialReport,
      ...lastReoprt,
      memo: "",
    });
  };

  // バリデーション
  const validate = () => {
    const newErrors = { reportInput: "" };
    let isValid = true;
    // if (!formData.reportInput) {
    //   newErrors.reportInput = "内容を入力してください";
    //   isValid = false;
    // }
    // setErrors(newErrors);
    return isValid;
  };

  /**
   * 一覧表示ボタン押下処理
   */
  const openList = () => {
    const savedReports = JSON.parse(
      localStorage.getItem("reports") ?? "[]",
    ) as Report[];
    setReports(savedReports);
    setIsListOpen(true);
  };

  return (
    <div className="Report">
      <button className="history-button" onClick={openList}>
        ↻ 履歴一覧
      </button>
      <main className="layout">
        <section className="card">
          <h2 className="section-heading">✏️ 日報入力</h2>
          <p className="section-description">各項目を入力してください</p>

          <label htmlFor="date">日付</label>
          <input
            id="date"
            name="date"
            type="date"
            value={report.date ?? ""}
            onChange={handleReportChange}
          />

          <label>出退勤時間</label>
          <div className="time-grid">
            <div>
              <label
                htmlFor="inTime"
                style={{ marginTop: "0", color: "#6b7280", fontWeight: "600" }}
              >
                出勤時間（in）
              </label>
              <input
                id="inTime"
                name="inTime"
                type="time"
                value={report.inTime}
                onChange={handleChangeTime}
              />
            </div>
            <div className="tilde">〜</div>
            <div>
              <label
                htmlFor="outTime"
                style={{ marginTop: "0", color: "#6b7280", fontWeight: "600" }}
              >
                退勤時間（out）
              </label>
              <input
                id="outTime"
                type="time"
                name="outTime"
                value={report.outTime}
                onChange={handleChangeTime}
              />
            </div>
          </div>

          <div className="work-time" id="workTime">
            勤務時間：{report.workTime} (残業時間：{report.overTime})
          </div>

          <label htmlFor="projectName">PJ名</label>
          <input
            id="projectName"
            name="projectName"
            type="text"
            value={report.projectName}
            onChange={handleReportChange}
          />

          <label htmlFor="clientName">常駐先企業名</label>
          <input
            id="clientName"
            name="clientName"
            type="text"
            value={report.clientName}
            onChange={handleReportChange}
          />

          <label htmlFor="workPlace">出社場所</label>
          <input
            id="workPlace"
            name="workPlace"
            type="text"
            value={report.workPlace}
            onChange={handleReportChange}
          />

          <label>勤務形態</label>
          <div className="work-style">
            <label
              className={`style-option ${workStyle === "出社" ? "active" : ""}`}
              id="officeOption"
            >
              <input
                type="radio"
                name="workStyle"
                value="出社"
                checked={workStyle == "出社"}
                onChange={(e) => {
                  setWorkStyle(e.target.value);
                }}
              />
              🏢 出社
            </label>
            <label
              className={`style-option ${workStyle === "在宅" ? "active" : ""}`}
              id="remoteOption"
            >
              <input
                type="radio"
                name="workStyle"
                value="在宅"
                checked={workStyle == "在宅"}
                onChange={(e) => {
                  setWorkStyle(e.target.value);
                }}
              />
              🏠 在宅
            </label>
            <input
              type="hidden"
              name="workStyle"
              value={report.workStyle}
              onChange={handleReportChange}
            />
          </div>

          <label htmlFor="memo">作業内容</label>
          <textarea
            id="workMSemo"
            placeholder="作業内容を入力してください"
            name="workMemo"
            value={report.workMemo}
            onChange={handleReportChange}
          ></textarea>

          <label htmlFor="memo">所感</label>
          <textarea
            id="memo"
            placeholder="所感を入力してください"
            name="memo"
            value={report.memo}
            onChange={handleReportChange}
          ></textarea>
          <div className="buttons">
            <button
              className="secondary"
              id="cooyButtton"
              onClick={() => saveReport()}
            >
              この日報を保存
            </button>
            <button
              className="secondary"
              id="copyLastButton"
              onClick={() => loadLastReport()}
            >
              ↩ 前回コピー
            </button>
            <button
              className="secondary preview-mobile-button"
              id="openPreviewButton"
              onClick={() => setIsPreviewOpen(true)}
            >
              👁️ プレビュー
            </button>
            <button
              className="primary"
              id="copyPreviewButton"
              onClick={() => copyToClipboard(previewText)}
            >
              📋 クリップボードにコピー
            </button>
          </div>
          <div className="note">
            ※ スマホではプレビューをボタンから確認できます
          </div>
        </section>
        {isPreviewOpen && (
          <Preview report={report} onClose={() => setIsPreviewOpen(false)} />
        )}
        {isListOpen && (
          <ReportListModal
            reports={reports}
            onClose={() => setIsListOpen(false)}
            onSelect={(selectedReport) => {
              setReport({
                ...InitialReport,
                ...selectedReport,
                memo: "",
              });
              setIsListOpen(false);
            }}
          />
        )}
      </main>
    </div>
  );
}
