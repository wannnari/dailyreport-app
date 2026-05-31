import React, { useState } from "react";
import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import ReportForm from "./components/Report";
import Preview from "./components/Preview";
import { Report } from "./types/report";
import ListForm from "./ListForm";
import "./App.css";

function App() {
  const [report, setReport] = useState({
    date: "",
    inTime: "",
    outTime: "",
    projectName: "",
    clientName: "",
    workPlace: "",
    workStyle: "在宅",
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav>
          {/* Linkコンポーネントでナビゲーションを作成 */}
          <Link to="/">日報入力</Link> | <Link to="/list">リスト</Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/components/"
          element={<ReportForm report={report} setReport={setReport} />}
        />
        <Route element={<Preview report={report} />} />
      </Routes>
    </div>
  );
}

export default App;
