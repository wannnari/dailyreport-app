import React, { useState } from "react";
import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import ReportForm from "./components/Report";
import Preview from "./components/Preview";
import { Report } from "./types/report";
import ListForm from "./ListForm";
import "./App.css";

function App() {
  const [report, setReport] = useState<Report>({
    date: "",
    inTime: "09:00",
    outTime: "18:00",
    projectName: "",
    clientName: "",
    workPlace: "",
    workStyle: "在宅",
    workMemo: "",
    memo: "",
  });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<ReportForm report={report} setReport={setReport} />}
        />
      </Routes>
    </div>
  );
}

export default App;
