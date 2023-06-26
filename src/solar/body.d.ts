import { Angle, RectangularCoordinate, SphericalCoordinate } from "../models";
export declare class Body {
    d: number;
    N: Angle;
    i: Angle;
    w: Angle;
    a: number;
    e: number;
    M: Angle;
    L: Angle;
    oblecl: Angle;
    s: number;
    orbitsEarth: boolean;
    constructor(d: number, N: Array<number>, i: Array<number>, w: Array<number>, a: Array<number>, e: Array<number>, M: Array<number>, s: number, orbitsEarth: boolean);
    _E(): Angle;
    _dist(xyz: RectangularCoordinate): number;
    _trueAnomaly(xyz: RectangularCoordinate): Angle;
    asRect(): RectangularCoordinate;
    asEclip(): RectangularCoordinate;
    solRect(): RectangularCoordinate;
    asSphere(): SphericalCoordinate;
    magnitude(): number;
}
