import { useState } from "react";
import { Report } from "../types/report";
import { getHolidayName } from "../utils/holidays";

type Props = {
  reports: Report[];
  onClose: () => void;
  onEdit: (report: Report) => void;
};

/**
 * カレンダーモーダル
 * @param param0
 * @returns
 */
export default function CalendarModal({ reports, onClose, onEdit }: Props) {
  const [calendarMonth, setCalendarMonth] = useState(() => new Date());

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  const calendarDays = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: lastDay }, (_, i) => i + 1),
  ] as (number | null)[];

  const selectedReports = reports.filter((item) => item.date === selectedDate);

  const changeMonth = (offset: number) => {
    setCalendarMonth(new Date(year, month + offset, 1));
    setSelectedDate(null);
  };

  return (
    <div className="calendar-overlay" onClick={onClose}>
      <div
        className="calendar-modal"
        role="dialog"
        aria-modal="true"
        aria-label="日報カレンダー"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="calendar-header">
          <button type="button" onClick={() => changeMonth(-1)}>
            ◀
          </button>

          <h3>
            {year}年{month + 1}月
          </h3>

          <button type="button" onClick={() => changeMonth(1)}>
            ▶
          </button>

          <button type="button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="calendar-grid">
          {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
            <div key={day} className="calendar-weekday">
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} />;
            }

            const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

            const holidayName = getHolidayName(dateString);
            const dayOfWeek = new Date(year, month, day).getDay();

            const isRegistered = reports.some(
              (item) => item.date === dateString,
            );

            return (
              <button
                type="button"
                key={dateString}
                className={[
                  "calendar-day",
                  isRegistered && "registered",
                  holidayName && "holiday",
                  dayOfWeek === 0 && "sunday",
                  dayOfWeek === 6 && "saturday",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setSelectedDate(dateString)}
                title={holidayName ?? undefined}
              >
                <span>{day}</span>

                {holidayName && (
                  <span className="calendar-holiday-name">{holidayName}</span>
                )}

                {isRegistered && <span className="calendar-dot" />}
              </button>
            );
          })}
        </div>

        {selectedDate && (
          <div className="calendar-report-detail">
            <h3>{selectedDate} の日報</h3>

            {selectedReports.length > 0 ? (
              selectedReports.map((item) => (
                <div key={item.id} className="calendar-report-card">
                  <p>
                    <strong>PJ名：</strong>
                    {item.projectName}
                  </p>
                  <p>
                    <strong>常駐先企業名：</strong>
                    {item.clientName}
                  </p>
                  <p>
                    <strong>出社場所：</strong>
                    {item.workPlace}
                  </p>
                  <p>
                    <strong>勤務形態：</strong>
                    {item.workStyle}
                  </p>
                  <p>
                    <strong>出退勤：</strong>
                    {item.inTime} 〜 {item.outTime}
                  </p>
                  <p>
                    <strong>勤務時間：</strong>
                    {item.workTime}
                  </p>

                  <p className="calendar-report-memo">
                    <strong>作業内容：</strong>
                    {item.workMemo || "未入力"}
                  </p>

                  <p className="calendar-report-memo">
                    <strong>所感：</strong>
                    {item.memo || "未入力"}
                  </p>

                  <button
                    type="button"
                    className="calendar-edit-button"
                    onClick={() => onEdit(item)}
                  >
                    ✏️ この日報を編集
                  </button>
                </div>
              ))
            ) : (
              <p className="calendar-empty-message">
                この日付の日報は登録されていません。
              </p>
            )}
          </div>
        )}
        <p className="calendar-help">● 日報登録済み</p>
      </div>
    </div>
  );
}
