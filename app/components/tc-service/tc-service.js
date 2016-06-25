"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tcService = (function () {
    function tcService() {
    }
    tcService.prototype.checkGame = function (hash) {
        var factor = hash.length;
        var checkForColMatch = function (hash, x) { return (hash[x][0] === hash[x][1]) && (hash[x][1] === hash[x][2]) && hash[x][2]; };
        var checkForRowMatch = function (hash, x) { return (hash[0][x] === hash[1][x]) && (hash[1][x] === hash[2][x]) && hash[2][x]; };
        var checkForXMatch = function (hash) {
            var center = hash[1][1];
            if (!center)
                return false;
            return hash[0][0] === hash[2][2] && hash[2][2] === center || hash[0][2] === hash[2][0] && hash[2][0] === center;
        };
        for (var i = 0; i < factor; i += 1) {
            if (checkForColMatch(hash, i) || checkForRowMatch(hash, i)) {
                return { endGame: true };
            }
        }
        if (checkForXMatch(hash))
            return { endGame: true };
        if (hash.every(function (elm) { return elm.reduce(function (a, b) { return !a ? a : b; }) !== null; }))
            return { draw: true };
    };
    tcService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], tcService);
    return tcService;
}());
exports.tcService = tcService;
//# sourceMappingURL=tc-service.js.map