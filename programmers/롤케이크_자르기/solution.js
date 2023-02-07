function solution(toppings) {
  const LENGTH = toppings.length;
  if (LENGTH < 2) {
    return 0;
  }

  let index = 1;
  let count = 0;
  const frontArray = toppings.slice(0, index);
  const rearArray = toppings.slice(index);
  const frontSet = new Set(frontArray);
  const rearSet = new Set(rearArray);
  const rearSetDetail = rearArray.reduce((acc, val) => {
    if (acc[val] === undefined) {
      acc[val] = 0;
    }
    acc[val]++;
    return acc;
  }, {});

  do {
    if (frontSet.size === rearSet.size) {
      count++;
    }

    const topping = toppings[index];

    frontSet.add(topping);
    if (rearSetDetail[topping] < 2) {
      rearSet.delete(topping);
    } else {
      rearSetDetail[topping]--;
    }

    index++;
  } while (index < LENGTH);

  return count;
}
