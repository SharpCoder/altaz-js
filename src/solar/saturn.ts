import { Body } from "./body";

export class Saturn extends Body {
    constructor(d: number) {
        super(
            d,
            [113.6634, 2.38980E-5],
            [2.4886, -1.081E-7],
            [339.3939, 2.97661E-5],
            [9.55475],
            [0.055546, -9.499E-9],
            [316.9670, 0.0334442282],
            9.539,
            false
        );
    }
  }