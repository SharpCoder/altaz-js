# AltAz

AltAz is a library for performing common astronomy calculations.

## Installation

Use any familiar package manager

```bash
pnpm install --save altaz
npm install --save altaz
yarn add altaz
```

## Usage

```typescript
// *************************************************
// Calculating days julian
// *************************************************
import { instantToDaysJulian } from "altaz";
const jday = instantToDaysJulian(now);

// *************************************************
// Calculating the position of a star at an instant
// *************************************************
import {
  Angle,
  GPSCoordinate,
  round,
  sphereToHorizontal,
  SphericalCoordinate,
  timeToAngle,
  timeToDec,
} from "altaz";

// Position of observer (Seattle)
const location = new GPSCoordinate(
    Angle.fromDegrees(47.608013),
    Angle.fromDegrees(-122.335167.),
);

// Position of the star
const skyTarget = {
  ra_h: 1.0,
  ra_m: 1.0,
  ra_s: 1.0,
  dec_deg: 1.0,
  dec_m: 1.0,
  dec_s: 1.0,
};

const starRightAscension = timeToAngle(
  parseFloat(skyTarget.ra_h),
  parseFloat(skyTarget.ra_m),
  parseFloat(skyTarget.ra_s)
);

const starDeclination = Angle.fromDegrees(
  parseFloat(skyTarget.dec_deg) +
    timeToDec(0, parseFloat(skyTarget.dec_m), parseFloat(skyTarget.dec_s))
);

const targetPosition = new SphericalCoordinate(
  1.0,
  starRightAscension,
  starDeclination
);

const targetAltAz = sphereToHorizontal(location, targetPosition, new Date());

// *************************************************
// Calculating the position of a planet at an instant
// *************************************************
import { Mercury, sphereToHorizontal } from "altaz";

// Position of observer (Seattle)
const location = new GPSCoordinate(
    Angle.fromDegrees(47.608013),
    Angle.fromDegrees(-122.335167.),
);

// Position of the planet
const targetPosition = planet.asSphere();
const targetAltAz = sphereToHorizontal(location, targetPosition, new Date());
```

## Installation

Build with the script

```bash
pnpm run build
npm run build
yarn run build
```

## Tests

I have tests somewhere. I'll migrate them eventually but I promise the math here is pretty well tested and used in a few simple production apps.

## Contributing

Please open an issue first to discuss what you would like to change and we'll go from there.

## License

[MIT](https://choosealicense.com/licenses/mit/)
