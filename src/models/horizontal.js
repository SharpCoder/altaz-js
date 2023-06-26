"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorizontalCoordinate = void 0;
var angle_1 = require("./angle");
var HorizontalCoordinate = (function () {
    function HorizontalCoordinate(altitude, azimuth) {
        this.altitude = altitude;
        this.azimuth = azimuth;
    }
    HorizontalCoordinate.zero = function () {
        return new HorizontalCoordinate(angle_1.Angle.zero(), angle_1.Angle.zero());
    };
    return HorizontalCoordinate;
}());
exports.HorizontalCoordinate = HorizontalCoordinate;
//# sourceMappingURL=horizontal.js.map