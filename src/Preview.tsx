import React, { useState } from "react";
import "./App.css";

const Preview = () => {
  return (
    <div className="modal-overlay" id="previewModal" aria-hidden="true">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div className="modal-header">
          <h2 id="modalTitle">👁️ プレビュー</h2>
          <button className="close-button" id="closePreviewButton">
            閉じる
          </button>
        </div>
        <div className="preview-box" id="modalPreview"></div>
        <div className="modal-actions">
          <button className="secondary" id="modalCloseButton">
            戻る
          </button>
          <button className="primary" id="modalCopyButton">
            📋 コピー
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
