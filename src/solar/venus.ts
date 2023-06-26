import { Body } from "./body";

export class Venus extends Body {

    constructor(d: number) {
        super(
            d,
            [76.6799, 2.46590E-5],
            [3.3946, 2.75E-8],
            [54.8910, 1.38374E-5],
            [0.723330],
            [0.006773, -1.302E-9],
            [48.0052, 1.6021302244],
            0.723,
            false
            );
        }
  }