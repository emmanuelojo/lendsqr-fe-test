export const truncateString = (str: string, n: number): string => {
    if (!str) return str;
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
};

export function capitalize(str: string) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
