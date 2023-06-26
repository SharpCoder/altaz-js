import { Angle } from './angle';
export declare class HorizontalCoordinate {
    altitude: Angle;
    azimuth: Angle;
    constructor(altitude: Angle, azimuth: Angle);
    static zero(): HorizontalCoordinate;
}
