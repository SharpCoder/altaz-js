import { Angle } from './angle';

export class GPSCoordinate {
    latitude: Angle;
    longitude: Angle;

    constructor(latitude: Angle, longitude: Angle) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    static zero(): GPSCoordinate {
        return new GPSCoordinate(Angle.zero(), Angle.zero());
    }
}