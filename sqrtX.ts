/*
  Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

  You must not use any built-in exponent function or operator.

  For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/

const sqrtX = (x: number): number => {
  if (x < 2) {
    return x
  }
  let left = 0;
  let right = x;

  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    const square = mid * mid;

    if (square > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  return left;
};