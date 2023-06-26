import { Body } from "./body";

export class Mercury extends Body {

    constructor(d: number) {
        super(
            d,
            [48.3313, 3.24587E-5],
            [7.0047, 5.00E-8],
            [29.1241, 1.01444E-5],
            [0.387098],
            [0.205635, 5.59E-10],
            [168.6562, 4.0923344368],
            0.39,
            false
        );
    }
}