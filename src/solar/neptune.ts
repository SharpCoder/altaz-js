import { Body } from "./body";

export class Neptune extends Body {
  
    constructor(d: number) {
        super(
            d,
            [131.7806, 3.0173E-5],
            [1.7700, -2.55E-7],
            [272.8461, -6.027E-6],
            [30.05826, 3.313E-8],
            [0.008606, 2.15E-9],
            [260.2471, 0.005995147],
            30.06,
            false
        );
    }
  }