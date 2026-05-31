// 1桁の数字を表す型
type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

// 時刻の形式（例: 09:00 や 23:59）を表現する型
export type TimeString = `${Digit}${Digit}:${Digit}${Digit}`;

export interface TimeRange {
  startTime: TimeString;
  endTime: TimeString;
}
