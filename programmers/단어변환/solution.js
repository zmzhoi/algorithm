function solution(begin, target, words) {
  const queue = [];
  let found = false;
  let answer = 0;

  function bfs(begin, target, words, count = 0) {
    if (begin === target) {
      found = true;
      answer = count;
      return;
    }

    const filteredWords = words.filter((word) => word !== begin);
    for (let i = 0; i < filteredWords.length; i++) {
      let cnt = 0;
      for (let j = 0; j < filteredWords[i].length; j++) {
        if (begin[j] === filteredWords[i][j]) {
          cnt++;
        }
      }
      if (cnt >= filteredWords[i].length - 1) {
        queue.push([filteredWords[i], count + 1]);
      }
    }

    while (queue.length) {
      const [word, cnt] = queue.shift();
      bfs(word, target, filteredWords, cnt);
      if (found) {
        break;
      }
    }
  }

  bfs(begin, target, words);

  return answer;
}
