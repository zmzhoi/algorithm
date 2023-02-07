function solution(participant, completion) {
  let completionObj = {};
  completion.forEach((v) => {
    if (completionObj[v]) {
      completionObj[v] += 1;
    } else {
      completionObj[v] = 1;
    }
  });

  for (let i = 0; i < participant.length; i++) {
    let name = participant[i];
    if (completionObj[name] === undefined) {
      return name;
    } else {
      completionObj[name] -= 1;
    }

    if (completionObj[name] < 0) return name;
  }
}
