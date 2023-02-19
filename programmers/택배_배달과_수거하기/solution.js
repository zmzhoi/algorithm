function solution(cap, n, deliveries, pickups) {
  let totalDistance = 0;

  while (deliveries.length > 0 || pickups.length > 0) {
    let deliveryCap = cap; // 배달 용량
    let pickupCap = 0; // 수거 용량

    // 택배 배달.
    let maxDeliveryDistance = 0;
    while (deliveryCap > 0 && deliveries.length > 0) {
      const count = deliveries.pop();
      deliveryCap -= count;
      if (count > 0 && maxDeliveryDistance === 0) {
        maxDeliveryDistance = (deliveries.length + 1) * 2;
      }
    }
    if (deliveryCap < 0) {
      deliveries.push(deliveryCap * -1);
      deliveryCap = 0;
    }

    // 택배 수거
    let maxPickupDistance = 0;
    while (pickupCap <= cap) {
      const count = pickups.pop();
      pickupCap += count;
      if (count > 0 && maxPickupDistance === 0) {
        maxPickupDistance = (pickups.length + 1) * 2;
      }
    }
    if (pickupCap > cap) {
      pickups.push(pickupCap - cap);
      pickupCap = cap;
    }

    totalDistance += Math.max(maxDeliveryDistance, maxPickupDistance);
  }

  return totalDistance;
}

/**
 * 문제를 풀었다 생각하고 돌려보니 실패 및 시간초과등이 발생했다.
 * 어떤 케이스인지 생각이 나질 않아서, 아래 적힌 테스트케이스를 가져와서 돌려보면서 디버깅해서 문제가 뭔지 알게되었다.
 * 무조건 택배 배달 이후 수거를 하는 쪽으로 생각하다보니 놓친게 있었다.
 * 배달 하는쪽의 가장 먼 곳 보다 수거하는쪽의 가장 먼 곳이 더 멀 수도 있다는 사실을 간과했다.
 * 그래서 배달적재현황(deliveryCap) 과 수거적재현황(pickupCap)의 변수들을 분리하였고
 * 각자의 가장 먼 곳중 더 큰 곳을 totalDistance에 더해주었다.
 * 해결.
 */

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]), 16);
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]), 30);
console.log(solution(4, 5, [8, 0, 8, 0, 4], [0, 0, 0, 0, 20]), 50);
console.log(solution(2, 2, [0, 1], [0, 4]), 8);
console.log(solution(2, 2, [0, 0], [0, 6]), 12);
console.log(solution(2, 2, [0, 0], [4, 0]), 4);
console.log(solution(2, 2, [5, 0], [0, 3]), 10);
console.log(solution(5, 3, [5, 0, 5], [0, 1, 10]), 16);
console.log(solution(5, 3, [5, 1, 5], [0, 1, 10]), 16);
console.log(solution(2, 3, [0, 6, 13], [19, 0, 1]), 54);
console.log(solution(2, 3, [4, 2, 1], [0, 4, 1]), 16);
console.log(solution(4, 5, [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]), 12);
console.log(solution(4, 4, [25, 24, 51, 0], [51, 0, 0, 49]), (13 * 4 + 6 * 2 + 6) * 2);
