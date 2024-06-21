export const formatNumber = (num: number) => {
    const formattedNumber = new Intl.NumberFormat("en-ng").format(num);

    return formattedNumber;
};
