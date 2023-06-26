export const log10 = (x: number) => Math.log(x) / Math.LN10;
export const rads = (deg: number) => (deg / 180.0) * Math.PI;
export const degs = (rads: number) => (rads * (180.0 / Math.PI));
export const round = (value: number, decimals: number) => Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
export const sumAndExponentiallyMultiply = (values: Array<number>, multiplier: number) => {
    let result = 0.0;
    for (let i = 0; i < values.length; i++) {
      if (i == 0) {
        result += values[i];
      } else {
        result += values[i] * Math.pow(multiplier, i);
      }
    }
    return result;
  }