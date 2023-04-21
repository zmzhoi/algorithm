function solution(n, computers) {
  let count = 0;
  const visited = Array.from({ length: n }).map((_) => false);

  function dfs(computer, index) {
    visited[index] = true; // 방문처리

    computer.forEach((value, i) => {
      if (i !== index && value === 1 && !visited[i]) {
        dfs(computers[i], i);
      }
    });
  }

  computers.forEach((computer, index) => {
    if (!visited[index]) {
      dfs(computer, index);
      count++;
    }
  });

  return count;
}

/**
 * 1 <-> 2
 * 1 <-> 2 <-> 3
 *
 * 1과 2가 직접적으로 연결되어있거나
 * 1과 3처럼 간접적으로 연결되어있어도
 * 모두 하나의 네트워크로 본다.
 *
 * 즉, n개의 컴퓨터를 순회하는데
 * 현재 탐색중인 컴퓨터에 연결된(직접적연결) 컴퓨터를 따라간다.
 * 연결된 컴퓨터에 다시 연결된(간접적연결) 컴퓨터를 없을때까지 따라간다.(이는 DFS 알고리즘과 같다.)
 * 끝까지 따라가는 이유는 간접적으로 연결되어있는 모든 컴퓨터들을 하나의 네트워크로 보기 때문이다.
 *
 * 이 네트워크의 갯수를 반환하는 문제이므로
 *
 * n개의 컴퓨터를 순회하면서
 * 각각의 컴퓨터마다 직접 혹은 간접적으로 연결된 컴퓨터를 모두 찾을 수 있는 DFS 알고리즘으로 순회하고 방문처리를 해준다.
 * 각각의 컴퓨터를 순회할 때는 방문처리가 되지않은 것만 DFS탐색을 시작하고 그와동시에 네트워크 갯수 count를 증가시킨다.
 *
 */
