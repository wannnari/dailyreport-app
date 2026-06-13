import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReportForm from "./components/Report";
import { Report, InitialReport } from "./types/report";
import Message from "./components/Message";

function App() {
  const [report, setReport] = useState<Report>(InitialReport);
  const [message, setMessage] = useState<string>("");
  /**
   *  メッセージ表示処理
   *. 一定時間経過で自動で閉じる
   */
  const showMessage = (text: string) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ReportForm
              report={report}
              setReport={setReport}
              showMessage={showMessage}
            />
          }
        />
      </Routes>
      <Message message={message} />
    </div>
  );
}

export default App;
