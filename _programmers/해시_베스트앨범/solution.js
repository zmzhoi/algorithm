function createItem(index, plays) {
  return {
    index,
    plays,
  };
}

function solution(genres, plays) {
  const listMap = {};
  const countMap = {};
  const rankList = [];

  genres.forEach((genre, index) => {
    if (listMap[genre] === undefined) listMap[genre] = [];
    if (countMap[genre] === undefined) countMap[genre] = 0;

    const item = createItem(index, plays[index]);

    listMap[genre].push(item);
    countMap[genre] += plays[index];
  });

  for (let genre in countMap) {
    rankList.push({ genre, count: countMap[genre] });
  }

  rankList.sort((a, b) => b.count - a.count);

  for (let genre in listMap) {
    listMap[genre].sort((a, b) => b.plays - a.plays);
    listMap[genre] = listMap[genre].slice(0, 2);
  }

  let answer = [];
  rankList.forEach(({ genre }) => {
    listMap[genre].some(({ index }, i) => {
      if (i === 2) return true;
      answer.push(index);
      return false;
    });
  });

  return answer;
}
