import { Angle } from './angle';
export declare class GPSCoordinate {
    latitude: Angle;
    longitude: Angle;
    constructor(latitude: Angle, longitude: Angle);
    static zero(): GPSCoordinate;
}
