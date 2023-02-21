function solution(elements) {
  const length = elements.length;
  const answer = [];
  for(let i=1 ; i<=length ; i++) {
      let temp = []
      for(let j=0 ; j<length ; j++) {
          let sum = 0;
          for(let k=0 ; k<i ; k++) {
              if(i === 1) {
                  sum += elements[(j + k)];
              } else {
                  sum += elements[(j + k) % length];   
              }
          }
          temp.push(sum);
      }
      answer.push(...temp)
  }
  
  return new Set(answer).size
}