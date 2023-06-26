import { Body } from "./body";

export class Uranus extends Body {

    constructor(d: number) { 
        super(
            d,
            [74.0005, 1.3978E-5],
            [0.7733,  1.9E-8],
            [96.6612, 3.0565E-5],
            [19.18171, -1.55E-8],
            [0.047318, 7.45E-9],
            [142.5905, 0.011725806],
            19.18,
            false
        );
    }
}