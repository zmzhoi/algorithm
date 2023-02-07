function toNumberArray(number) {
  return number.split('').map((num) => +num);
}

function solution(number, k) {
  const answer = [];
  let realAnswerLength = 0;

  const parsed = toNumberArray(number);
  const LENGTH = parsed.length - k;

  for (let i = 0; i < parsed.length; i++) {
    let j = realAnswerLength - 1;
    while (j >= 0 && answer[j] < parsed[i] && parsed.length - i + j >= LENGTH) {
      j--;
    }

    if (j !== realAnswerLength - 1) {
      answer[j + 1] = parsed[i];
      realAnswerLength = j + 2;
    } else if (realAnswerLength < LENGTH) {
      answer[realAnswerLength] = parsed[i];
      realAnswerLength++;
    }
  }

  return answer.slice(0, realAnswerLength).join('');
}

/**
 * 이중포문으로 시작.
 * 역시나 효율성 실패.
 * 그래서 단일 순회 방법을 열시히 생각해보았지만 떠오르지 않았음.
 * 이중포문 내에서 최소한으로 탐색할 수 있게 처리.
 * 그런데도 효율성 실패.
 *
 * 이중포문을 벗어날 수는 없을 것 같아서
 * 현재 코드내에서 연산 비용이 있는 배열을 생성하는 코드를 제거했다.
 * 배열을 추가(push)하는 것 말고 생성(slice)하는 코드를 포문 내에서 제거함.
 *
 * 결과는 성공.
 *
 *
 */
