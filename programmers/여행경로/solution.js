function solution(tickets) {
  const distance = tickets.length;
  const answer = [];

  function dfs(end, tickets, distance, routes = ['ICN'], count = 0) {
    if (count === distance) {
      answer.push(routes);
      return;
    }

    tickets.forEach(([src, dest], i) => {
      if (src === end) {
        const clonedTickets = [...tickets];
        clonedTickets.splice(i, 1);
        const nextRoutes = routes.concat(dest);
        dfs(dest, clonedTickets, distance, nextRoutes, count + 1);
      }
    });
  }

  dfs('ICN', tickets, distance);

  answer.sort((a, b) => {
    for (let i = 1; i < a.length; i++) {
      if (a[i] === b[i]) {
        continue;
      } else {
        return a[i] > b[i] ? 1 : -1;
      }
    }
    return 0;
  });

  return answer[0];
}
