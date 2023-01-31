function solution(s) {
  let answer = '';
  let queue = '';
  const numberAsString = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const isNumber = !isNaN(char);

    if (isNumber) {
      answer += char;
    } else {
      queue += char;
      const number = numberAsString[queue];
      if (number) {
        answer += number;
        queue = '';
      }
    }
  }

  return parseInt(answer);
}
