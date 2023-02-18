function move(command, [x, y]) {
  switch (command) {
    case 'L':
      return [Math.max(x - 1, -5), y];
    case 'R':
      return [Math.min(x + 1, 5), y];
    case 'D':
      return [x, Math.max(y - 1, -5)];
    default:
      return [x, Math.min(y + 1, 5)];
  }
}

function generateStreetKey(cp, np) {
  const c = cp[0] + cp[1];
  const n = np[0] + np[1];
  return c > n ? np.concat(cp).join('_') : cp.concat(np).join('_');
}

function solution(dirs) {
  let answer = 0;
  const iKnowThisStreet = {};

  dirs.split('').reduce(
    (currentPosition, command) => {
      const nextPosition = move(command, currentPosition);
      if (nextPosition.join('') === currentPosition.join('')) {
        return nextPosition;
      }

      const streetKey = generateStreetKey(currentPosition, nextPosition);
      if (!iKnowThisStreet[streetKey]) {
        iKnowThisStreet[streetKey] = true;
        answer++;
      }

      return nextPosition;
    },
    [0, 0],
  );

  return answer;
}
