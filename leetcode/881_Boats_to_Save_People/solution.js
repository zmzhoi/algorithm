/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => b - a);

  let count = 0;
  let s = 0;
  let e = people.length - 1;
  while (s <= e) {
    const sum = people[e] + people[s];
    if (sum <= limit) {
      s++;
      e--;
    } else {
      s++;
    }

    count++;
  }

  return count;
};

/**
 * @see https://leetcode.com/problems/boats-to-save-people/
 *
 * 가장 효율적인 방법은 가장 무거운 사람과 가장 가벼운사람을 짝을 지어 보트에 태우는 것이다.
 * 그러기 위해 우선 poeple을 오름차순 정렬을 한다.
 * 첫 번째 원소와 마지막 원소는 각각 가장 무거운사람과 가장 가벼운사람이다.
 * 이 둘을 짝지어서 태운다.
 *
 * 만약 이 둘을 합한 무게가 limit보다 무거워서 짝지어 태울 수가 없다면?
 * 우선 무거운 사람을 혼자 태우고, 다음번에 그 다음으로 무거운 사람(두 번째 원소)과 가장 가벼운사람(마지막 원소)을 짝짓는다.
 * 이를 반복한다.
 *
 */
