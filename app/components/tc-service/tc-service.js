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
        var hashLength = hash.length;
        for (var i = 0; i < hash.length; i++) {
            if ((i === 1 || i === 4 || i === 7) && (hash[i] === hash[i - 1]) && (hash[i] === hash[i + 1]))
                return this.winner(hash[i], i);
            else if ((i === 0 || i === 1 || i === 2) && (hash[i] === hash[i + 3]) && (hash[i] === hash[i + 6]))
                return this.winner(hash[i], i);
            else if ((i === 0 || i === 2) && (hash[i] === hash[4]) && (hash[i] === hash[8] || hash[i] === hash[6]))
                return this.winner(hash[i], i);
        }
        ;
        if (hash.every(function (elem) { return typeof (elem) == 'string'; }))
            return this.draw();
    };
    tcService.prototype.winner = function (winner, position) {
        var winnerObject = {
            winner: winner,
            position: position,
            endGame: true
        };
        return winnerObject;
    };
    tcService.prototype.draw = function () {
        var drawObject = {
            draw: true
        };
        return drawObject;
    };
    tcService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], tcService);
    return tcService;
}());
exports.tcService = tcService;
//# sourceMappingURL=tc-service.js.map