function solution(s) {
  const countMap = {};
  const parsedStr = s.slice(1, -1).replaceAll('{', '').replaceAll('}', '');

  parsedStr.split(',').forEach((num) => {
    if (!isNaN(num)) {
      countMap[num] = (countMap[num] || 0) + 1;
    }
  });

  return Object.keys(countMap)
    .map((num) => parseInt(num))
    .sort((a, b) => countMap[b] - countMap[a]);
}
