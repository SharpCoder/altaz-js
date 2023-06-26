import { Body } from './body';

export class Venus extends Body {
    constructor(d: number) {
        super(
            d,
            [76.6799, 2.4659e-5],
            [3.3946, 2.75e-8],
            [54.891, 1.38374e-5],
            [0.72333],
            [0.006773, -1.302e-9],
            [48.0052, 1.6021302244],
            0.723,
            false
        );
    }
}
