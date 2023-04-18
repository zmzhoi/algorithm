function solution(picks, minerals) {
  const pickCount = picks.reduce((acc, num) => acc + num * 5, 0);
  const mineralsAsNumber = minerals
    .slice(0, pickCount)
    .map((mineral) => (mineral === 'diamond' ? 25 : mineral === 'iron' ? 5 : 1));

  let mineralBundles = [];
  for (let i = 0; i < mineralsAsNumber.length; i++) {
    const index = Math.floor(i / 5);
    if (mineralBundles[index] === undefined) {
      mineralBundles[index] = {
        minerals: [],
        sum: 0,
      };
    }
    mineralBundles[index].minerals.push(mineralsAsNumber[i]);
    mineralBundles[index].sum += mineralsAsNumber[i];
  }

  mineralBundles.sort((a, b) => b.sum - a.sum);

  let pickIndex = 0;
  let answer = 0;
  while (pickIndex < 3 && mineralBundles.length > 0) {
    let picked = null;
    while (picked === null && pickIndex < 3) {
      if (picks[pickIndex] === 0) {
        pickIndex++;
      } else {
        picked = pickIndex === 0 ? 25 : pickIndex === 1 ? 5 : 1;
        picks[pickIndex]--;
      }
    }

    if (pickIndex > 2) {
      break;
    }

    mineralBundles[0].minerals.forEach((mineral) => {
      answer += Math.ceil(mineral / picked);
    });
    mineralBundles.shift();
  }

  return answer;
}
