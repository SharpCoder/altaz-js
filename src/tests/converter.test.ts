import { horizontalToSphere, sphereToHorizontal } from "../converter";
import { timeToAngle } from "../core";
import { round } from "../math";
import { Angle, GPSCoordinate, SphericalCoordinate } from "../models";

import stars from './stardb.json';

test("verify encoding positions of 100 stars", () => {
    
    
    const instant = new Date("2024-08-24 06:07");
    const gps = new GPSCoordinate(Angle.fromDegrees(47.608013), Angle.fromDegrees(-122.335167));


    for (const star of stars) {
        console.log("Testing star " + star.name);
        const spherical = new SphericalCoordinate(
            1.0,
            timeToAngle(star["ra_h"], star["ra_m"], star["ra_s"]),
            new Angle(
                Angle.fromDegrees(star["dec_deg"]).asRad() +
                timeToAngle(
                    0,
                    star["dec_m"],
                    star["dec_s"]
                ).asRad()
            )
        );

        const horizontal = sphereToHorizontal(gps, spherical, instant);
        const newSpherical = horizontalToSphere(gps, horizontal, instant);
        expect(round(newSpherical.Decl.asDeg(), 2)).toBeCloseTo(round(spherical.Decl.asDeg(), 2), 1);
        expect(round(newSpherical.RA.asDeg(), 2)).toBeCloseTo(round(spherical.RA.asDeg(), 2), 1);
    }
});