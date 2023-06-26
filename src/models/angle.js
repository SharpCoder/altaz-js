"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Angle = void 0;
var Angle = (function () {
    function Angle(rads) {
        this._rads = 0.0;
        this._rads = rads;
    }
    Angle.zero = function () {
        return new Angle(0.0);
    };
    Angle.fromDegrees = function (degrees) {
        return new Angle((degrees / 180.0) * Math.PI);
    };
    Angle.prototype.asRad = function () {
        return this._rads;
    };
    Angle.prototype.asDeg = function () {
        return (this.asRad() * 180.0) / Math.PI;
    };
    Angle.prototype.rev = function () {
        var rads = this.asRad();
        rads = rads - Math.floor(rads / (2 * Math.PI)) * (2 * Math.PI);
        return new Angle(rads);
    };
    return Angle;
}());
exports.Angle = Angle;
//# sourceMappingURL=angle.js.map