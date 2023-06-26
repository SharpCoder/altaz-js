import type { Angle } from "./angle";
export declare class SphericalCoordinate {
    r: number;
    RA: Angle;
    Decl: Angle;
    constructor(r: number, RA: Angle, Decl: Angle);
}
