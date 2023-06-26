import { Body } from './body';

export class Mercury extends Body {
    constructor(d: number) {
        super(
            d,
            [48.3313, 3.24587e-5],
            [7.0047, 5.0e-8],
            [29.1241, 1.01444e-5],
            [0.387098],
            [0.205635, 5.59e-10],
            [168.6562, 4.0923344368],
            0.39,
            false
        );
    }
}
