function reverse(str) {
  let reversed = '';

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
}

function main(A, T) {
  const WORD = A;
  const WORD_REVERSE = reverse(A);

  let odd = true;
  let text = T;
  let found;
  do {
    let index;
    if (odd) {
      index = text.indexOf(WORD);
    } else {
      index = text.lastIndexOf(WORD);
    }

    found = index > -1;
    if (found) {
      text = text.slice(0, index) + text.slice(index + WORD.length, text.length);
    }

    odd = !odd;
  } while (found);

  console.log('RESULT: ', text);
}

main('banana', 'babananananadeda');
