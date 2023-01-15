function solution(arr) {
  const answer = [0, 0];

  function compressAsQuadTree(x, y, size) {
    if (size === 1) {
      answer[arr[y][x]]++;
      return;
    }

    let shouldCompress = false;
    for (let i = y; i < size + y; i++) {
      for (let j = x; j < size + x; j++) {
        if (arr[i][j] !== arr[y][x]) {
          shouldCompress = true;
          break;
        }
      }
      if (shouldCompress) {
        break;
      }
    }

    if (!shouldCompress) {
      answer[arr[y][x]]++;
      return;
    }

    let halfLen = size / 2;
    compressAsQuadTree(x, y, halfLen);
    compressAsQuadTree(x + halfLen, y, halfLen);
    compressAsQuadTree(x, y + halfLen, halfLen);
    compressAsQuadTree(x + halfLen, y + halfLen, halfLen);
  }

  compressAsQuadTree(0, 0, arr.length);
  return answer;
}
