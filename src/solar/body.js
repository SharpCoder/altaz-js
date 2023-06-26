"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = void 0;
var converter_1 = require("../converter");
var math_1 = require("../math");
var models_1 = require("../models");
var sol_1 = require("./sol");
var Body = (function () {
    function Body(d, N, i, w, a, e, M, s, orbitsEarth) {
        this.d = d;
        this.N = models_1.Angle.fromDegrees((0, math_1.sumAndExponentiallyMultiply)(N, d));
        this.i = models_1.Angle.fromDegrees((0, math_1.sumAndExponentiallyMultiply)(i, d));
        this.w = models_1.Angle.fromDegrees((0, math_1.sumAndExponentiallyMultiply)(w, d));
        this.a = (0, math_1.sumAndExponentiallyMultiply)(a, d);
        this.e = (0, math_1.sumAndExponentiallyMultiply)(e, d);
        this.M = models_1.Angle.fromDegrees((0, math_1.sumAndExponentiallyMultiply)(M, d)).rev();
        this.L = models_1.Angle.fromDegrees(this.w.asDeg() + this.M.asDeg()).rev();
        this.oblecl = models_1.Angle.fromDegrees(23.4393 - 3.563E-7 * d);
        this.s = s;
        this.orbitsEarth = orbitsEarth;
    }
    Body.prototype._E = function () {
        var E0 = this.M.asRad() + this.e * Math.sin(this.M.asRad()) * (1 + this.e * Math.cos(this.M.asRad()));
        for (var i = 0; i < 25; i++) {
            var E1 = E0 - (E0 - this.e * Math.sin(E0) - this.M.asRad()) / (1 - this.e * Math.cos(E0));
            if (Math.abs(E0 - E1) < (0, math_1.rads)(0.005)) {
                E0 = E1;
                break;
            }
            else {
                E0 = E1;
            }
        }
        return new models_1.Angle(E0);
    };
    Body.prototype._dist = function (xyz) {
        return Math.sqrt(Math.pow(xyz.x.asRad(), 2) + Math.pow(xyz.y.asRad(), 2));
    };
    Body.prototype._trueAnomaly = function (xyz) {
        return new models_1.Angle(Math.atan2(xyz.y.asRad(), xyz.x.asRad()));
    };
    Body.prototype.asRect = function () {
        var E = this._E();
        return new models_1.RectangularCoordinate(new models_1.Angle(this.a * (Math.cos(E.asRad()) - this.e)), new models_1.Angle(this.a * Math.sin(E.asRad()) * Math.sqrt(1 - Math.pow(this.e, 2))), models_1.Angle.zero());
    };
    Body.prototype.asEclip = function () {
        var xyz = this.asRect();
        var r = this._dist(xyz);
        var v = this._trueAnomaly(xyz);
        return new models_1.RectangularCoordinate(new models_1.Angle(r * (Math.cos(this.N.asRad()) * Math.cos(v.asRad() + this.w.asRad()) - Math.sin(this.N.asRad()) * Math.sin(v.asRad() + this.w.asRad()) * Math.cos(this.i.asRad()))), new models_1.Angle(r * (Math.sin(this.N.asRad()) * Math.cos(v.asRad() + this.w.asRad()) + Math.cos(this.N.asRad()) * Math.sin(v.asRad() + this.w.asRad()) * Math.cos(this.i.asRad()))), new models_1.Angle(r * Math.sin(v.asRad() + this.w.asRad()) * Math.sin(this.i.asRad())));
    };
    Body.prototype.solRect = function () {
        return new sol_1.Sol(this.d).asEclip();
    };
    Body.prototype.asSphere = function () {
        var xyz = this.asRect();
        var r = this._dist(xyz);
        var v = this._trueAnomaly(xyz);
        var xyzEclip = this.asEclip();
        if (this.orbitsEarth) {
            var equatorial = (0, converter_1.rotateAroundX)(xyzEclip, this.oblecl);
            return (0, converter_1.rectToSphere)(equatorial);
        }
        else {
            var xyzSol = this.solRect();
            var xyzGeo = new models_1.RectangularCoordinate(new models_1.Angle(xyzSol.x.asRad() + xyzEclip.x.asRad()), new models_1.Angle(xyzSol.y.asRad() + xyzEclip.y.asRad()), new models_1.Angle(xyzSol.z.asRad() + xyzEclip.z.asRad()));
            var equatorial = (0, converter_1.rotateAroundX)(xyzGeo, this.oblecl);
            return (0, converter_1.rectToSphere)(equatorial);
        }
    };
    Body.prototype.magnitude = function () {
        return 99.0;
    };
    return Body;
}());
exports.Body = Body;
//# sourceMappingURL=body.js.map