// 労働時間が8時間(休憩1時間含む)の場合の残業時間算出
export const calcOverTime =(
    inTime: string,
    outTime: string,
    baseTime: string = '18:00'
):string => {
    const [inH, inM] = inTime.split(":").map(Number);
    const [outH, outM] = outTime.split(":").map(Number);

    const inMinutes = inH * 60 + inM;
    let outMinutes = outH * 60 + outM;

    // 日跨ぎ対応
    if(outMinutes < inMinutes){
        outMinutes += 24 * 60;
    }
    const isOverTime = (outMinutes - inMinutes) - 60 > 480 ? true : false;
    const diff = outMinutes - inMinutes - 540;

    // 8h越えかどうかで判断している
    if(diff <= 0 || !isOverTime) return "0.00h";

    const hours = diff / 60;

    return `${hours.toFixed(2)}h`;
}