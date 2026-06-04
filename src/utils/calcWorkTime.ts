export const calcWorkTime = (
    inTime: string,
    outTime: string,
    breakMinutes: number = 60
): string => {
    if (!inTime || !outTime) return "0.00h";

    const [inH, inM] = inTime.split(":").map(Number);
    const [outH, outM] = outTime.split(":").map(Number);

    const inMinutes = inH * 60 + inM;
    let outMinutes = outH * 60 + outM;
    if(outMinutes < inMinutes){
        outMinutes += 24 * 60;
    }

    const workMinutes = outMinutes - inMinutes - breakMinutes;

    if (workMinutes <= 0) return "0時間00分";

    const hours = Math.floor(workMinutes / 60);
    const minutes = workMinutes % 60;

    return `${hours}時間${String(minutes).padStart(2, "0")}分`;
};