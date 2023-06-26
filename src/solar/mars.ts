import { Body } from "./body";

export class Mars extends Body {
    constructor(d: number) {
        super(
            d,
            [49.5574, 2.11081E-5],
            [1.8497, -1.78E-8],
            [286.5016, 2.92961E-5],
            [1.523688],
            [0.093405, 2.516E-9],
            [18.6021, 0.5240207766],
            1.524,
            false
        );
    }
}