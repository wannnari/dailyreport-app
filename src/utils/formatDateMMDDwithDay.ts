export const formatDateMMDDwithDay = (date: string):string =>{
    if(!date) return "";

    const d = new Date(`${date}T00:00:00`);
    const week = ["日","月","火","水","木","金","土"][d.getDay()];

    return `${d.getMonth() + 1}/${d.getDate()}(${week})`;
}