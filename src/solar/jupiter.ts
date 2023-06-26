import { Body } from "./body";

export class Jupiter extends Body {
    constructor(d: number) {
        super(
            d,
            [100.4542, 2.76854E-5],
            [1.3030, -1.557E-7],
            [273.8777, 1.64505E-5],
            [5.20256],
            [0.048498, 4.469E-9],
            [19.8950, 0.0830853001],
            5.203,
            false,
        );
    }
}