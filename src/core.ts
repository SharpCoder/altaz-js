import { Angle } from './models';
import { Sol } from './solar/body';

export const timeToDec = (hours: number, minutes: number, seconds: number) => {
    return hours + minutes / 60.0 + seconds / 3600.0;
};

export const timeToAngle = (
    hours: number,
    minutes: number,
    seconds: number
) => {
    return Angle.fromDegrees(timeToDec(hours, minutes, seconds) * 15);
};

export const instantToDaysJulian = (instant: Date) => {
    const day =
        instant.getDate() +
        timeToDec(
            instant.getUTCHours(),
            instant.getUTCMinutes(),
            instant.getUTCSeconds()
        ) /
            24.0;

    let month = instant.getUTCMonth() + 1;
    let year = instant.getUTCFullYear();

    // If we are calculating for january or february, consider it the "13th and 14th"
    // months.
    if (month == 1 || month == 2) {
        year = year - 1;
        month = month + 12;
    }

    let A = Math.floor(year / 100.0);
    let B = 2.0 - A + Math.floor(A / 4.0);
    return (
        Math.floor(365.25 * (year + 4716.0)) +
        Math.floor(30.6001 * (month + 1.0)) +
        day +
        B -
        1524.5
    );
};

export const julianToDayNumber = (daysJulian: number) => daysJulian - 2451543.5;
export const julianToCenturyTime = (julianDate: number) =>
    (julianDate - 2451545.0) / 36525.0;
export const julianMillenniaFromEpoch2000 = (julianDays: number) =>
    (julianDays - 2451545.0) / 365250.0;
export const julianCenturiesFromEpoch2000 = (julianDays: number) =>
    10 * julianMillenniaFromEpoch2000(julianDays);

export const calculateSidereelTime = (
    instant: Date, 
    longitude: Angle
): number => {
    let JD = instantToDaysJulian(instant);
    let d = julianToDayNumber(JD);
    let sol = new Sol(d);

    let GMST0 =
        Angle.fromDegrees(sol.L.asDeg() + 180.0)
            .rev()
            .asDeg() / 15.0; // Hours
    let SIDTIME =
        GMST0 +
        timeToDec(
            instant.getUTCHours(),
            instant.getUTCMinutes(),
            instant.getUTCSeconds()
        ) +
        longitude.asDeg() / 15.0;
    return (SIDTIME + 24.0) % 24.0;
}

export const calculateHourAngle = (
    instant: Date,
    longitude: Angle,
    RA: Angle
) => {
    let SIDTIME = calculateSidereelTime(instant, longitude);
    let HA = SIDTIME - RA.asDeg() / 15.0;
    return Angle.fromDegrees(HA * 15.0);
};
