import { Body } from './body';

export class Uranus extends Body {
    constructor(d: number) {
        super(
            d,
            [74.0005, 1.3978e-5],
            [0.7733, 1.9e-8],
            [96.6612, 3.0565e-5],
            [19.18171, -1.55e-8],
            [0.047318, 7.45e-9],
            [142.5905, 0.011725806],
            19.18,
            false
        );
    }
}
