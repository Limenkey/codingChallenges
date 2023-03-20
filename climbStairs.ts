/*
  You are climbing a staircase. It takes n steps to reach the top.

  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

const climbStairs = (n: number): number => {
  if (n < 2) return n;
  const res: number[] = new Array(n + 1)
  res[1] = 1;
  res[2] = 2;
  for (let i = 3; i <= n; i++){
    res[i] = res[i - 1] + res[i - 2]
  }
return res[n];
};