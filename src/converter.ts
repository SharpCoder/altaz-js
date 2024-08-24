import { calculateHourAngle, calculateSidereelTime } from './core';
import { rads } from './math';
import {
    Angle,
    RectangularCoordinate,
    SphericalCoordinate,
    HorizontalCoordinate,
    GPSCoordinate,
} from './models';

export function sphereToRect(
    sphere: SphericalCoordinate
): RectangularCoordinate {
    return new RectangularCoordinate(
        new Angle(
            sphere.r *
                Math.cos(sphere.RA.asRad()) *
                Math.cos(sphere.Decl.asRad())
        ),
        new Angle(
            sphere.r *
                Math.sin(sphere.RA.asRad()) *
                Math.cos(sphere.Decl.asRad())
        ),
        new Angle(sphere.r * Math.sin(sphere.Decl.asRad()))
    );
}

export function rectToSphere(rect: RectangularCoordinate): SphericalCoordinate {
    return new SphericalCoordinate(
        Math.sqrt(
            Math.pow(rect.x.asRad(), 2) +
                Math.pow(rect.y.asRad(), 2) +
                Math.pow(rect.z.asRad(), 2)
        ),
        new Angle(Math.atan2(rect.y.asRad(), rect.x.asRad())).rev(),
        new Angle(
            Math.atan2(
                rect.z.asRad(),
                Math.sqrt(
                    Math.pow(rect.x.asRad(), 2) + Math.pow(rect.y.asRad(), 2)
                )
            )
        )
    );
}

/**
 * This method will rotate a rectancular coordinate system around the X
 * axis through the angle of oblecl. In other words, convert ecliptic to
 * equatorial.
 */
export function rotateAroundX(
    rect: RectangularCoordinate,
    oblecl: Angle
): RectangularCoordinate {
    return new RectangularCoordinate(
        rect.x,
        new Angle(
            rect.y.asRad() * Math.cos(oblecl.asRad()) -
                rect.z.asRad() * Math.sin(oblecl.asRad())
        ),
        new Angle(
            rect.y.asRad() * Math.sin(oblecl.asRad()) +
                rect.z.asRad() * Math.cos(oblecl.asRad())
        )
    );
}

/**
 * This method will take a Spherical coordinate and translate it
 * to Horizontal (Alt/Az), while adjusting for the local hour angle
 * at an instant.
 */
export function sphereToHorizontal(
    gps: GPSCoordinate,
    target: SphericalCoordinate,
    instant: Date
): HorizontalCoordinate {
    const HA = calculateHourAngle(instant, gps.longitude, target.RA);
    const x = Math.cos(HA.asRad()) * Math.cos(target.Decl.asRad());
    const y = Math.sin(HA.asRad()) * Math.cos(target.Decl.asRad());
    const z = Math.sin(target.Decl.asRad());

    const d90 = rads(90);
    const xhor =
        x * Math.cos(d90 - gps.latitude.asRad()) -
        z * Math.sin(d90 - gps.latitude.asRad());
    const yhor = y;
    const zhor =
        x * Math.sin(d90 - gps.latitude.asRad()) +
        z * Math.cos(d90 - gps.latitude.asRad());

    const azimuth = Math.atan2(yhor, xhor) + Math.PI;
    const altitude = Math.atan2(
        zhor,
        Math.sqrt(Math.pow(xhor, 2) + Math.pow(yhor, 2))
    );

    return new HorizontalCoordinate(new Angle(altitude), new Angle(azimuth));
}

/**
 * This method will take a Horizontal coordinate and translate it
 * to Spherical (Ra/Dec), while adjusting for the local hour angle
 * at an instant.
 */
export function horizontalToSphere(
    gps: GPSCoordinate,
    target: HorizontalCoordinate,
    instant: Date,
): SphericalCoordinate {
    // Convert altitude and azimuth to hour angle and declination
    const sinDecl = Math.sin(gps.latitude.asRad()) * Math.sin(target.altitude.asRad()) + Math.cos(gps.latitude.asRad()) * Math.cos(target.altitude.asRad()) * Math.cos(target.azimuth.asRad());
    const Decl = Math.asin(sinDecl);
    let cosHA = (Math.sin(target.altitude.asRad()) - Math.sin(gps.latitude.asRad()) * sinDecl) / (Math.cos(Decl) * Math.cos(gps.latitude.asRad()));
    // Handle quadrant logic.
    const sign = target.azimuth.asDeg() > 180.0 ? 1.0 : -1.0;
    const acosHA = Math.acos(cosHA);
    let HA = new Angle(sign * acosHA).asDeg() / 15.0;
    let RA = calculateSidereelTime(instant, gps.longitude) - HA;

    return new SphericalCoordinate(
        1.0,
        Angle.fromDegrees(RA * 15).rev(),
        new Angle(Decl),
    );
}
