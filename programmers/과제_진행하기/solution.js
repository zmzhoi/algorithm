function solution(plans) {
  const answer = [];
  const watingStack = [];
  let idleTime = 0;

  // 전처리 (정렬 및 number 파싱)
  plans.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  plans.forEach((plan) => {
    const [hh, mm] = plan[1].split(':');
    plan[1] = Number(hh) * 60 + Number(mm);
    plan[2] = Number(plan[2]);
  });

  while (plans.length || watingStack.length) {
    let currentWork;
    if (idleTime > 0) {
      if (watingStack.length) {
        currentWork = watingStack.pop();
      } else {
        idleTime = 0;
        continue;
      }
    } else if (plans.length) {
      currentWork = plans.shift();
    } else {
      answer.push(watingStack.pop()[0]);
      continue;
    }

    let nextWork;
    if (idleTime > 0) {
      idleTime -= currentWork[2];
      if (idleTime >= 0) {
        answer.push(currentWork[0]);
      } else {
        currentWork[2] = idleTime * -1;
        idleTime = 0;
        watingStack.push(currentWork);
      }
    } else if (plans.length) {
      nextWork = plans[0];
      idleTime = nextWork[1] - currentWork[1];
      idleTime -= currentWork[2];
      if (idleTime >= 0) {
        answer.push(currentWork[0]);
      } else {
        currentWork[2] = idleTime * -1;
        idleTime = 0;
        watingStack.push(currentWork);
      }
    } else {
      answer.push(currentWork[0]);
    }
  }

  return answer;
}

/**
 * 구현방법을 문제에서 전부알려주고 있는 문제이다.
 * 즉, 구현능력을 보는 문제이다.
 * 운영체제 스케쥴링을 구현하는 문제유형으로 보임.
 *
 * 구현이 생각처럼 쉽지가 않았음 ㅠ
 * 히든케이스도 찾는게 힘들었다..
 */
