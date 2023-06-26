import type { Angle } from "./angle";

export class SphericalCoordinate {
  r: number;
  RA: Angle;
  Decl: Angle;

  constructor(r: number, RA: Angle, Decl: Angle) {
    this.r = r;
    this.RA = RA;
    this.Decl = Decl;
  }
}
