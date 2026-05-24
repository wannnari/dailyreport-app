import React from "react";
import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import ReportForm from "./Report";
import ListForm from "./ListForm";
import "./App.css";

function App() {
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
        <Route path="/" element={<ReportForm />} />
        <Route path="/about" element={<ListForm />} />
      </Routes>
    </div>
  );
}

export default App;
