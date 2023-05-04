function solution(board) {
  let answer = -1;
  const width = board[0].length;
  const height = board.length;
  const visitied = board.map((_) => _.split('').map((__) => false));

  let ri, rj;
  board.some((word, i) => {
    const j = word.split('').findIndex((c) => c === 'R');
    if (j >= 0) {
      ri = i;
      rj = j;
      return true;
    }
  });

  // [i, j, count, 이전i, 이전j]
  const queue = [[ri, rj, 0, -1, -1]];
  const bfs = () => {
    while (queue.length) {
      const [i, j, count, pi, pj] = queue.shift();

      if (board[i][j] === 'G') {
        answer = count;
        break;
      }

      for (const [x, y] of [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ]) {
        let ni = i + x;
        let nj = j + y;
        if (ni === pi && nj === pj) {
          continue;
        }

        // eslint-disable-next-line no-constant-condition
        while (true) {
          if (ni === -1 || ni === height || nj === -1 || nj === width || board[ni][nj] === 'D') {
            const fi = ni - x;
            const fj = nj - y;
            if ((i !== fi || j !== fj) && visitied[fi][fj] === false) {
              visitied[fi][fj] = true;
              queue.push([fi, fj, count + 1, fi - x, fj - y]);
            }
            break;
          }
          ni += x;
          nj += y;
        }
      }
    }
  };

  bfs();

  return answer;
}
