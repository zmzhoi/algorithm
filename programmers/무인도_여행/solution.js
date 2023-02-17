function dfs(answers, i, j) {
  // Index 벗어나면 재귀 탈출.
  if (i < 0 || i >= answers.length || j < 0 || j >= answers[i].length) {
    return 0;
  }

  // "바다" 혹은 "방문 처리된 곳"은 재귀 탈출.
  if (answers[i][j] === 'X') {
    return 0;
  }

  // 일단 현재 값 보관.
  let value = answers[i][j];

  // 방문 처리
  answers[i][j] = 'X';

  const moveUnits = [
    // 상하좌우 방문을 위한 이동값.
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  for (const unit of moveUnits) {
    // 상하좌우, 총 4번 방문을 하는데 깊이우선탐색을 한다.
    value += dfs(answers, i + unit[0], j + unit[1]);
  }

  return value;
}

function solution(maps) {
  const answer = [];
  const parsedMap = maps.map((blocks) =>
    blocks.split('').map((block) => (block !== 'X' ? Number(block) : block)),
  );

  for (let i = 0; i < parsedMap.length; i++) {
    for (let j = 0; j < parsedMap[i].length; j++) {
      const value = dfs(parsedMap, i, j);
      if (value !== 0) {
        answer.push(value);
      }
    }
  }

  if (answer.length === 0) {
    return [-1];
  }
  return answer.sort((a, b) => a - b);
}

/**
 * 대학생 이후로 알고리즘 공부를 안하다보니.. 자료구조 및 알고리즘에 대해 너무 모르게 되었다.
 * 해당 문제가 안풀려서 해설을 보고 완전히 이해한 후, 내 방식대로 코드를 작성해 보았다.
 *
 * 해당 문제는 깊이우선탐색의 기본형 문제라고하는데 깊이우선탐색이 뭐였는지 기억이 나지 않았다.
 * 그런데 별 건 아니었고, 평소 트리를 순회할 때 사용하던 알고리즘과 비슷했다.
 * 트리를 순회할 땐 단순히 선형으로 순회하기 떄문에,
 * 한 번 방문한 곳은 방문 하지 않아서 방문 처리를 하지 않아도 재귀 무한 반복에 빠지지 않았다. (당연한 이야기지만, 트리 순회시 자식노드가 없으면 탈출하는 조건은 작성햇었다.)
 * 그런데 타겟하는 자료구조가 트리 처럼 선형으로 순회할수 없는 구조라면,
 * 방문처리를 하지 않으면 무한루프에 빠질 수 있다. 이 떄 사용하는 알고리즘이 깊이우선탐색(DFS) 이다.
 * 그래서 한 번 방문을 한 노드는 방문처리를 해주어야하고, 방문처리된 노드에 한해서 탈출 조건을 작성해주어야 한다. 이게 핵심.
 *
 * 이렇게... 깊이우선탐색을 좀 더 공부한 이후 해당 알고리즘을 이용하여 문제를 풀엇다.
 *
 * 깊이우선탐색에서 중요한점은
 */
