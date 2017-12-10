var removedDigits = function (numberContainsNotDigits) {
    return numberContainsNotDigits.replace(/[\d]/g, '');
};

var removedNotDigits = function (numberContainsNotDigits) {
    return numberContainsNotDigits.replace(/[^\d]/g, '');
};

export { removedDigits, removedNotDigits };
