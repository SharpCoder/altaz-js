import { Body } from './body';

export class Jupiter extends Body {
    constructor(d: number) {
        super(
            d,
            [100.4542, 2.76854e-5],
            [1.303, -1.557e-7],
            [273.8777, 1.64505e-5],
            [5.20256],
            [0.048498, 4.469e-9],
            [19.895, 0.0830853001],
            5.203,
            false
        );
    }
}
