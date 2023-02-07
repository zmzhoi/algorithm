function solution(gems) {
  let answer;
  let gemCount = new Set(gems).size;
  let minDistance = Infinity;
  let startIndex = 0;
  let count = 0;
  const lastIndexMap = {};

  for (let i = 0; i < gems.length; i++) {
    const gem = gems[i];

    if (lastIndexMap[gem] === undefined) {
      count++;
    }

    const currentGemIndex = lastIndexMap[gem];
    lastIndexMap[gem] = i;
    if (startIndex === currentGemIndex) {
      startIndex = Math.min(...Object.values(lastIndexMap));
    }

    if (count === gemCount) {
      const currentDistance = i - startIndex;
      if (currentDistance < minDistance) {
        minDistance = currentDistance;
        answer = [startIndex + 1, i + 1];
      }
    }
  }

  return answer;
}
