(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.utils = {})));
}(this, (function (exports) { 'use strict';

var removedDigits = function (numberContainsNotDigits) {
    return numberContainsNotDigits.replace(/[\d]/g, '');
};

var removedNotDigits = function (numberContainsNotDigits) {
    return numberContainsNotDigits.replace(/[^\d]/g, '');
};

exports.removedDigits = removedDigits;
exports.removedNotDigits = removedNotDigits;

Object.defineProperty(exports, '__esModule', { value: true });

})));
