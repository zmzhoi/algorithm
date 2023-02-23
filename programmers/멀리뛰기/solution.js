function getFibo(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }

  return arr[n];
}

function solution(n) {
  const answer = getFibo(n + 1);
  return answer;
}

/**
 * 처음에 조금 고민해보다가 dfs로 풀면 될 것 같아서 dfs로 진행했다.
 * 그런데 쉽게 되는법은 없다. 시간초과 ㅠㅠ
 * 힌트를 보니 피보나치 수열과 같은규칙이란다. 눈치채지못했다.
 * 그래서 피보나치 수열로 알고리즘으로 풀었따. 허무.
 * 피보나치 수열을 구하는 방법 중 가장 선호되는 방식인 반복문으로 풀었다. (무지성 재귀 < DP 재귀 < 반복문)
 */
