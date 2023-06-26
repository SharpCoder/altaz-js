"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPSCoordinate = void 0;
var angle_1 = require("./angle");
var GPSCoordinate = (function () {
    function GPSCoordinate(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    GPSCoordinate.zero = function () {
        return new GPSCoordinate(angle_1.Angle.zero(), angle_1.Angle.zero());
    };
    return GPSCoordinate;
}());
exports.GPSCoordinate = GPSCoordinate;
//# sourceMappingURL=gps.js.map