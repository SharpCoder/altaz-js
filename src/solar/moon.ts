import { Body } from './body';

export class Moon extends Body {
    constructor(d: number) {
        super(
            d,
            [125.1228, -0.0529538083],
            [5.1454],
            [318.0634, 0.1643573223],
            [60.2666],
            [0.0549],
            [115.3654, 13.0649929509],
            1.0,
            true
        );
    }
}
