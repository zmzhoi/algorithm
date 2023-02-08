function solution(priorities, location) {
  let answer = 0;
  const waitingQueue = priorities.map((priority, location) => ({
    priority,
    location,
  }));

  while (waitingQueue.length) {
    const target = waitingQueue.shift();
    const defer = waitingQueue.some(({ priority }) => priority > target.priority);

    if (defer) {
      waitingQueue.push(target);
      continue;
    } else {
      answer++;
      if (target.location === location) {
        break;
      }
    }
  }

  return answer;
}
