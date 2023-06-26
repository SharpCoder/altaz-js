import type { Angle } from './angle';

export class RectangularCoordinate {
    x: Angle;
    y: Angle;
    z: Angle;

    constructor(x: Angle, y: Angle, z: Angle) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
