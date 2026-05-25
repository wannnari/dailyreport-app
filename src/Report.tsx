import React, { useState, useEffect } from "react";

import "./Report.css";
import "./App.css";

// 1桁の数字を表す型
type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

// 時刻の形式（例: 09:00 や 23:59）を表現する型
type TimeString = `${Digit}${Digit}:${Digit}${Digit}`;

interface TimeRange {
  startTime: TimeString;
  endTime: TimeString;
}

const ReportForm = () => {
  const [formData, setFormData] = useState({ reportInput: "" });
  const [errors, setErrors] = useState({ reportInput: "" });
  const [dateInput, setDate] = useState<string>();
  const [timeRange, setTimeRange] = useState<TimeRange>({
    startTime: "09:00",
    endTime: "18:00",
  });
  const [workStyle,setWorkStyle] = useState<string>("");

  /**
   * 初期表示時の日付セット処理
   *  */
  const setTodayForInitialize = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const dataInput = `${yyyy}-${mm}-${dd}`;
    setDate(dataInput);
  };

  // 初期表示処理
  React.useEffect(() => {
    setTodayForInitialize();
  }, []);

  // 開始・終了時間のonChangeイベント
  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTimeRange((prev) => ({
      ...prev,
      [name]: value as TimeString,
    }));
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  // バリデーション
  const validate = () => {
    const newErrors = { reportInput: "" };
    let isValid = true;
    if (!formData.reportInput) {
      newErrors.reportInput = "内容を入力してください";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="Report">
      <main className="layout">
        <section className="card">
          <h2 className="section-heading">✏️ 日報入力</h2>
          <p className="section-description">各項目を入力してください</p>

          <label htmlFor="date">日付</label>
          <input
            id="date"
            type="date"
            value={dateInput}
            onChange={handleChangeDate}
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
                name="startTime"
                type="time"
                value={timeRange.startTime}
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
                name="endTime"
                value={timeRange.endTime}
                onChange={handleChangeTime}
              />
            </div>
          </div>

          <div className="work-time" id="workTime">
            勤務時間：8時間00分
          </div>

          <label htmlFor="projectName">PJ名</label>
          <input id="projectName" type="text" value="○○システム保守開発" />

          <label htmlFor="clientName">常駐先企業名</label>
          <input id="clientName" type="text" value="株式会社○○" />

          <label htmlFor="workPlace">出社場所</label>
          <input id="workPlace" type="text" value="渋谷オフィス" />

          <label>勤務形態</label>
          <div className="work-style">
            <label className={`style-option ${workStyle === "出社" ? "active" : ""}`} id="officeOption">
              <input type="radio" name="workStyle" value="出社"
              checked={workStyle == "出社"}
              onChange={(e)=> {setWorkStyle(e.target.value)}} />
              🏢 出社
            </label>
            <label className={`style-option ${workStyle === "在宅" ? "active" : ""}`} id="remoteOption">
              <input type="radio" name="workStyle" value="在宅" checked={workStyle == "在宅"}
                onChange={(e)=> {setWorkStyle(e.target.value)}}/>
              🏠 在宅
            </label>
          </div>

          <label htmlFor="memo">所感</label>
          <textarea id="memo" placeholder="所感を入力してください"></textarea>

          <div className="buttons">
            <button className="secondary" id="copyLastButton">
              ↩ 前回コピー
            </button>
            <button
              className="secondary preview-mobile-button"
              id="openPreviewButton"
            >
              👁️ プレビュー
            </button>
            <button className="primary" id="copyPreviewButton">
              📋 クリップボードにコピー
            </button>
          </div>
          <div className="note">
            ※ スマホではプレビューをボタンから確認できます
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReportForm;
