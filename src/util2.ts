export const removedDigits = (numberContainsNotDigits: string): string => {
    return numberContainsNotDigits.replace(/[\d]/g, '');
};
