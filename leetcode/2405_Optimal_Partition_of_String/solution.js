/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let answer = 1;
  const set = new Set();

  s.split('').forEach((char) => {
    if (set.has(char)) {
      set.clear();
      set.add(char);
      answer++;
    } else {
      set.add(char);
    }
  });

  return answer;
};

/**
 * @see https://leetcode.com/problems/optimal-partition-of-string/description/
 *
 * 문자열 s를 여러 개의 파티션으로 쪼개는데,
 * 이 파티션내에서는 중복된 character가 없어야한다.
 *
 * 즉,
 * 문자열 s를 중복된 character기 없는 파티션으로 쪼개는데
 * 가장 적은 수의 파티션으로 쪼개야한다.
 * 이 때 가장 적은 수를 리턴하는 문제이다.
 *
 * 그냥 문자열 s의 각 문자를 순회하면서
 * 순회하며 만나는 모든 문자를 set에 담는다.
 * 중복되는 문자를 만날 때마다 쪼개주면 (set.has()로 중복 검증)
 * 가장 적은 수의 파티션을 만들 수 있다.
 *
 */
