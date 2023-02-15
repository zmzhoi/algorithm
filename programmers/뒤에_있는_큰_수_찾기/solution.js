function solution(numbers) {
  const stack = [];
  const answer = Array.from({ length: numbers.length }).map((_) => -1);

  for (let i = 0; i < numbers.length; i++) {
    while (numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}

/**
 * 답지를 보았다.
 * 답지를 보고, 왜 스택처럼 선입후출의 형태로 지나온 인덱스들을 관리해야하는지 이해가 안됐다.
 * 비교시 현재 스택의 값보다 현재값이 작은 값이라면 다음부터 현재 값을 먼저 비교할 수ㅜ 있게 우선순위를 높인것.
 * 우선순위를 높인 이유는, 앞으로나온 현재 값이 다음값들보다 계속 크다면 이전 스택값들도 당연히 계속클것이기때문에 우선순위를 높여둔것.
 * 이렇게하는 이유는 순회를 최소화하기 위함.
 *
 * 이 문제는 정말 최적화를 잘해야하는 문제..
 *
 *
 * 배워간점
 * 1. at()
 * 2. at(-1)  << [length-1]보다 간결
 * 3. undefined는 어떤 비교 조건을 걸어도 false가 나온다는점 (undefined < 100) => ( .at(-1) < someNumber)
 */
