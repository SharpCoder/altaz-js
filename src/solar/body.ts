import { rectToSphere, rotateAroundX } from "../converter";
import { rads, sumAndExponentiallyMultiply } from "../math";
import { Angle, RectangularCoordinate, SphericalCoordinate } from "../models";
import { Sol } from "./sol";

/**
 * This class represents a solar body and the arguments
 * of its orbit which are needed to calculate its position.
 * 
 * Many solar bodies have their own nuances, so it's all going
 * to be done one-off, but common code will live in the Body class.
 */
export class Body {
    d: number;
    N: Angle; // Longitude of the ascending node
    i: Angle; // inclination
    w: Angle; // Longitude of perihelion
    a: number; // mean distance
    e: number; // eccentricity
    M: Angle; // mean anomaly
    L: Angle; // mean longitude
    oblecl: Angle; // oblequity of the ecliptic 
    s: number; // Distance from the sun
    orbitsEarth: boolean; // If true, this body is simulated to orbit the earth
  
    constructor (
        d: number,
        N: Array<number>,
        i: Array<number>,
        w: Array<number>,
        a: Array<number>,
        e: Array<number>,
        M: Array<number>,
        s: number,
        orbitsEarth: boolean
    ) {
      this.d = d;
      this.N = Angle.fromDegrees(sumAndExponentiallyMultiply(N, d));
      this.i = Angle.fromDegrees(sumAndExponentiallyMultiply(i, d));
      this.w = Angle.fromDegrees(sumAndExponentiallyMultiply(w, d));
      this.a = sumAndExponentiallyMultiply(a, d);
      this.e = sumAndExponentiallyMultiply(e, d);
      this.M = Angle.fromDegrees(sumAndExponentiallyMultiply(M, d)).rev();
      this.L = Angle.fromDegrees(this.w.asDeg() + this.M.asDeg()).rev();
      this.oblecl = Angle.fromDegrees(23.4393 - 3.563E-7 * d);
      this.s = s;
      this.orbitsEarth = orbitsEarth;
    }
  
    _E(): Angle {
      let E0 = this.M.asRad() + this.e * Math.sin(this.M.asRad()) * (1 + this.e * Math.cos(this.M.asRad()));
      for (let i = 0; i < 25; i++) {
        let E1 = E0 - (E0 - this.e * Math.sin(E0) - this.M.asRad()) / (1 - this.e * Math.cos(E0));
        if (Math.abs(E0 - E1) < rads(0.005)) {
          E0 = E1;
          break;
        } else {
          E0 = E1;
        }
      }
  
      return new Angle(E0);
    }
  
    _dist(xyz: RectangularCoordinate): number {
      return Math.sqrt(Math.pow(xyz.x.asRad(), 2) + Math.pow(xyz.y.asRad(), 2));
    }
  
    _trueAnomaly(xyz: RectangularCoordinate): Angle {
      return new Angle(Math.atan2( xyz.y.asRad(), xyz.x.asRad()));
    }
  
    asRect(): RectangularCoordinate {
      const E = this._E();
      return new RectangularCoordinate(
        new Angle(this.a * (Math.cos(E.asRad()) - this.e)),
        new Angle(this.a * Math.sin(E.asRad()) * Math.sqrt(1 - Math.pow(this.e, 2))),
        Angle.zero(),
      );
    }
  
    asEclip(): RectangularCoordinate {
      const xyz = this.asRect();
      const r = this._dist(xyz);
      const v = this._trueAnomaly(xyz);
      return new RectangularCoordinate(
        new Angle(r * ( Math.cos(this.N.asRad()) * Math.cos(v.asRad()+this.w.asRad()) - Math.sin(this.N.asRad()) * Math.sin(v.asRad()+this.w.asRad()) * Math.cos(this.i.asRad()) )),
        new Angle(r * ( Math.sin(this.N.asRad()) * Math.cos(v.asRad()+this.w.asRad()) + Math.cos(this.N.asRad()) * Math.sin(v.asRad()+this.w.asRad()) * Math.cos(this.i.asRad()) )),
        new Angle(r * Math.sin(v.asRad() + this.w.asRad()) * Math.sin(this.i.asRad())),
      );
    }
  
    /**
     * This will return the rectangular coordinates of the sun
     * in a not-super-efficient way. Use with caution.
     */
    solRect(): RectangularCoordinate {
      return new Sol(this.d).asEclip();
    }
  
    asSphere(): SphericalCoordinate {
      var xyz = this.asRect();
      var r = this._dist(xyz);
      var v = this._trueAnomaly(xyz);
      var xyzEclip = this.asEclip();

  
      if (this.orbitsEarth) {
        var equatorial = rotateAroundX(xyzEclip, this.oblecl);
        return rectToSphere(equatorial);
      } else {

        // We are working with Heliocentric coordinates (sun-centered)
        // and so we need to offset the sun to find geocentric (earth-centered).
        var xyzSol = this.solRect();  
        var xyzGeo = new RectangularCoordinate(
          new Angle(xyzSol.x.asRad() + xyzEclip.x.asRad()),
          new Angle(xyzSol.y.asRad() + xyzEclip.y.asRad()),
          new Angle(xyzSol.z.asRad() + xyzEclip.z.asRad()),
        );
        
        var equatorial = rotateAroundX(xyzGeo, this.oblecl);
        return rectToSphere(equatorial);
      }
    }

    magnitude() {
        return 99.0;
    }
}