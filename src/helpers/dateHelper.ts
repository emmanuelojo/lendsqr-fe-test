export function formatDateShort(date: string | Date) {
    if (date === undefined || date === "") return "";
    const formattedDate = date.toString().split(" ")[0];
    const newDate = new Intl.DateTimeFormat("en-ng", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(new Date(formattedDate));

    const time = new Intl.DateTimeFormat("en-us", {
        hour: "numeric",
        minute: "numeric",
    }).format(new Date(formattedDate));

    return `${newDate.split(" ")[1]} ${newDate.split(" ")[0]}, ${newDate.split(" ")[2]}  ${time}`;
}
