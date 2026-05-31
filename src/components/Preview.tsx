import React, { useState } from "react";
import "./App.css";

const Preview = () => {
  // const openPreviewButton = document.getElementById("openPreviewButton");
  // openPreviewButton.addEventListener("click", openModal);
  // const previewModal = document.getElementById("previewModal");

  // function openModal() {
  //   renderPreview();
  //   previewModal.classList.add("open");
  //   previewModal.setAttribute("aria-hidden", "false");
  //   document.body.style.overflow = "hidden";
  // }

  // function closeModal() {
  //   previewModal.classList.remove("open");
  //   previewModal.setAttribute("aria-hidden", "true");
  //   document.body.style.overflow = "";
  // }

  // previewModal.addEventListener("click", (event) => {
  //   if (event.target === previewModal) closeModal();
  // });

  // function renderPreview() {
  //   const text = buildText();
  //   preview.textContent = text;
  //   modalPreview.textContent = text;
  // }

  // function buildText() {}

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
