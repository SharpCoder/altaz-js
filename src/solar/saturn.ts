import { Body } from './body';

export class Saturn extends Body {
    constructor(d: number) {
        super(
            d,
            [113.6634, 2.3898e-5],
            [2.4886, -1.081e-7],
            [339.3939, 2.97661e-5],
            [9.55475],
            [0.055546, -9.499e-9],
            [316.967, 0.0334442282],
            9.539,
            false
        );
    }
}
