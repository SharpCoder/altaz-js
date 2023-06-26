import { Angle } from './angle';

export class HorizontalCoordinate {
    altitude: Angle;
    azimuth: Angle;

    constructor(altitude: Angle, azimuth: Angle) {
        this.altitude = altitude;
        this.azimuth = azimuth;
    }

    static zero() {
        return new HorizontalCoordinate(Angle.zero(), Angle.zero());
    }
}
