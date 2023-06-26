import { Body } from './body';

export class Neptune extends Body {
    constructor(d: number) {
        super(
            d,
            [131.7806, 3.0173e-5],
            [1.77, -2.55e-7],
            [272.8461, -6.027e-6],
            [30.05826, 3.313e-8],
            [0.008606, 2.15e-9],
            [260.2471, 0.005995147],
            30.06,
            false
        );
    }
}
