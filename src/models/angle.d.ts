export declare class Angle {
    _rads: number;
    constructor(rads: number);
    static zero(): Angle;
    static fromDegrees(degrees: number): Angle;
    asRad(): number;
    asDeg(): number;
    rev(): Angle;
}
