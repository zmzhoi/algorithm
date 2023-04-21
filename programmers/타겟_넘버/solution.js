function solution(numbers, target) {
  function dfs(numbers, target, index, sum, count = 0) {
    if (numbers.length === index) {
      if (sum === target) {
        return count + 1;
      } else {
        return count;
      }
    }

    const number = numbers[index];

    count = dfs(numbers, target, index + 1, sum + number, count);
    count = dfs(numbers, target, index + 1, sum - number, count);

    return count;
  }

  return dfs(numbers, target, 0, 0);
}

/**
 * 모든 경우의수를 따지는 완전탐색을 하는 문제이다.
 * 최솟값을 구하는게 아니기때문에 BFS가 아닌, DFS를 이용하여 풀었다.
 */
