import { validateErrors } from "../types/validateErrors";
import { Report } from "../types/report";

export const validateReport = (report: Report): validateErrors => {
  const errors: validateErrors = {};
  if (!report.workMemo) {
    errors.workMemo = "作業内容は必須です。";
  }
  if (!report.memo) {
    errors.memo = "所感は必須です。";
  }
  return errors;
};
