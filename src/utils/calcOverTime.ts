export const calcOverTime =(
    inTime: string,
    outTime: string,
    baseTime: string = '18:00'
):string => {
    const [inH, inM] = inTime.split(":").map(Number);
    const [outH, outM] = outTime.split(":").map(Number);
    const [baseH, baseM] = baseTime.split(":").map(Number);

    const inMinutes = inH * 60 + inM;
    const outMinutes = outH * 60 + outM;
    const baseMinutes = baseH * 60 + baseM;

    const isOverTime = (outMinutes - inMinutes) - 60 > 480 ? true : false;
    const diff = outMinutes - baseMinutes;

    // 8h越えかどうかで判断している
    if(diff <= 0 || !isOverTime) return "0.00h";

    const hours = diff / 60;

    return `${hours.toFixed(2)}h`;
}