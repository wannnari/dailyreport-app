import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <div className="title-area">
        <div className="app-icon">📋</div>
        <div>
          <h1>日報アプリ</h1>
          <p className="subtitle">毎日の業務内容を簡単に作成・コピー</p>
        </div>
      </div>
      <button className="history-button">↻ 履歴一覧</button>
    </div>
  );
};

export default HeaderComponent;
