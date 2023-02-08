function getGreatestCommonDivisor(num1, num2) {
  const min = Math.min(num1, num2);
  const max = num1 === min ? num2 : num1;

  for (let i = min; i >= 1; i--) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }
}

function solution(w, h) {
  const greatestCommonDivisor = getGreatestCommonDivisor(w, h);
  return w * h - (w + h - greatestCommonDivisor);
}
