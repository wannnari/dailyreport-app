import { TimeString } from "./Time";

/**
 * Reportインターフェース
 */
export interface Report {
  id: string;
  date: string;
  inTime: TimeString;
  outTime: TimeString;
  projectName: string;
  clientName: string;
  workPlace: string;
  workStyle: string;
  workMemo: string;
  memo: string;
  overTime: string;
  workTime: string;
}
/**
 * 初期表示時の日付セット処理
 *  */
export const setTodayForInitialize = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const InitialReport: Report = {
  id: "",
  date: setTodayForInitialize(),
  inTime: "09:00",
  outTime: "18:00",
  projectName: "",
  clientName: "",
  workPlace: "",
  workStyle: "出社",
  workMemo: "",
  memo: "",
  overTime: "0.00h",
  workTime: "8時間00分",
};
