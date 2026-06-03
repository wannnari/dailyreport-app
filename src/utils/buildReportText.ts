import type {Report} from "../types/report";
import { formatDateMMDDwithDay } from "./formatDateMMDDwithDay";

export const buildReportText = (r:Report):string =>{
    return `① ${formatDateMMDDwithDay(r.date)} ${r.inTime}~${r.outTime}\n② ${r.projectName}/${r.clientName}/${r.workPlace}(${r.workStyle})\n③ ${r.workMemo}\n④ ${r.memo}\n⑤ ${r.overTime}h`;
}