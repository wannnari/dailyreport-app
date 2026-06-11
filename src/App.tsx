import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReportForm from "./components/Report";
import { Report, InitialReport } from "./types/report";

function App() {
  const [report, setReport] = useState<Report>(InitialReport);

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
