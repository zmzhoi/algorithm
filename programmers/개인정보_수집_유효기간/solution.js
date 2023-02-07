function solution(today, terms, privacies) {
  const termMap = terms.reduce((acc, term) => {
    const [type, month] = term.split(' ');
    acc[type] = parseInt(month);
    return acc;
  }, {});

  const answer = [];
  privacies.forEach((privacy, index) => {
    const [dateAsString, type] = privacy.split(' ');

    const date = new Date(dateAsString);
    const month = termMap[type];

    date.setMonth(date.getMonth() + month);

    if (date <= new Date(today)) {
      answer.push(index + 1);
    }
  });

  return answer;
}
