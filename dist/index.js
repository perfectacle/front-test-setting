'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var removedDigits = function (numberContainsNotDigits) {
    return numberContainsNotDigits.replace(/[\d]/g, '');
};

var removedNotDigits = function (numberContainsNotDigits) {
    return numberContainsNotDigits.replace(/[^\d]/g, '');
};

exports.removedDigits = removedDigits;
exports.removedNotDigits = removedNotDigits;
