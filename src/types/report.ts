import { TimeString} from "./Time";

/**
 * Reportインターフェース
 */
export interface Report {
  date: string;
  inTime: TimeString;
  outTime: TimeString;
  projectName: string;
  clientName: string;
  workPlace: string;
  workStyle: string;
  workMemo: string;
  memo: string;
}
