export class Angle {
    _rads = 0.0;

    constructor(rads: number) {
        this._rads = rads;
    }

    static zero() {
        return new Angle(0.0);
    }

    static fromDegrees(degrees: number): Angle {
        return new Angle((degrees / 180.0) * Math.PI);
    }

    asRad() {
        return this._rads;
    }

    asDeg() {
        return (this.asRad() * 180.0) / Math.PI;
    }

    rev(): Angle {
        let rads = this.asRad();
        rads = rads - Math.floor(rads / (2 * Math.PI)) * (2 * Math.PI);
        return new Angle(rads);
    }
}