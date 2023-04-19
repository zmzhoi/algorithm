function solution(sequence, k) {
  let answer = [];

  let left = 0;
  let right = 0;
  let sum = sequence[left];
  while (right < sequence.length && left <= right) {
    if (sum < k) {
      sum += sequence[++right];
    } else if (sum > k) {
      sum -= sequence[left++];
    } else {
      answer.push([left, right]);
      right++;
      sum += sequence[right];
    }
  }

  return answer.reduce(
    (acc, [left, right]) => {
      const diff = right - left;
      if (acc[1] - acc[0] <= diff) {
        return acc;
      } else {
        return [left, right];
      }
    },
    [0, Infinity],
  );
}

/**
 * 투포인터 문제유형!
 */
