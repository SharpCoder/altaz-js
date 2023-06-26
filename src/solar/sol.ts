import { Body } from "./body";

class Sol extends Body {
    constructor(d: number) {
        super(
            d, 
            [], 
            [],
            [282.9404, 4.70935E-5],
            [1.00000],
            [0.016709, -1.151E-9],
            [356.0470, 0.9856002585],
            0.0,
            true, // we suspend disbelief, for math
        );
    }

    magnitude() {
        return -26.74;
    }
}

export { Sol };