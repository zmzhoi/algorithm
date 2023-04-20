function solution(maps) {
  let answer = -1;
  const queue = [[0, 0, 1]];

  maps[0][0] = 0; // 시작지점 방문처리
  while (queue.length) {
    const [y, x, count] = queue.shift();

    if (y === maps.length - 1 && x === maps[0].length - 1) {
      answer = count;
      break;
    }

    for (const [ny, nx] of [
      [y - 1, x],
      [y, x + 1],
      [y + 1, x],
      [y, x - 1],
    ]) {
      if (ny >= 0 && ny < maps.length && nx >= 0 && nx < maps[0].length) {
        if (maps[ny][nx] !== 0) {
          // 미리 방문처리한다.
          // queue에 담을것이기 떄문에 어차피 결국엔 방문할 경로이다.
          // shift되기 전에 이 경로를 또 담으려 할 수도 있기 때문에 미리 방문처리를 한다.
          maps[ny][nx] = 0;
          // 방문할 경로를 queue에 담는다.
          queue.push([ny, nx, count + 1]);
        }
      }
    }
  }

  return answer;
}

/**
 * 길을 찾는 문제.
 * DFS, BFS 중 한 가지 탐색법을 사용하면된다.
 * 이 문제는 최단거리를 구하는 문제이다.
 * BFS는 DFS와 다르게 경로를 찾으면 그 경로가 곧 최단경로가 되는 탐색법이다.
 * 그래서 이 문제는 BFS가 더욱 적합하다.
 *
 * DFS로도 구현해보려했지만 고려할게 많더라..
 *
 * 시간복잡도가 높지않아서 효율성테스트에서 걸리거란생각을안했느데
 * 효율성테스트가 4개 전부 실패했다.
 * 알고보니, 이미방문한곳을 또 방문하면 실패하는거였다.
 * 그래서 방문처리를 하도록했다.
 * 그런데 이번엔 효율성 4번만 실패하더라.
 * 이거는 알고보니, 시작지점을 방문처리를 안해서 그런거였다.
 * 그러니까 중복방문을 단 한개도 허용하지 않는 거였다.
 *
 */
