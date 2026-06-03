import type {Report} from "../types/report";

export const buildReportText = (r:Report):string =>{
    return `① ${r.date} ${r.inTime}~${r.outTime}\n② ${r.projectName}/${r.clientName}/${r.workPlace}(${r.workStyle})\n③ ${r.workMemo}\n④ ${r.memo}\n⑤ ${r.overTime}h`;
}