function solution(clothes) {
  const map = {};
  clothes.map((clothe) => {
    const [name, type] = clothe;
    if (!map[type]) {
      map[type] = [name];
    } else {
      map[type].push(name);
    }
  });

  return Object.keys(map).reduce((acc, key) => acc * (map[key].length + 1), 1) - 1;
}

/*
- -
- - -
- -

2^3 = 8
2^1 = 2
*/
