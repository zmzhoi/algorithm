/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const answer = [];
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  let i = 0;
  let j = -1;
  let actionIndex = 0;
  const actionArray = ['R', 'B', 'L', 'T'];
  while (left <= right && top <= bottom) {
    const action = actionArray[actionIndex];
    switch (action) {
      case 'R':
        answer.push(matrix[i][++j]);
        if (j === right) {
          actionIndex = (actionIndex + 1) % actionArray.length;
          top++;
        }
        break;
      case 'B':
        answer.push(matrix[++i][j]);
        if (i === bottom) {
          actionIndex = (actionIndex + 1) % actionArray.length;
          right--;
        }
        break;
      case 'L':
        answer.push(matrix[i][--j]);
        if (j === left) {
          actionIndex = (actionIndex + 1) % actionArray.length;
          bottom--;
        }
        break;
      case 'T':
        answer.push(matrix[--i][j]);
        if (i === top) {
          actionIndex = (actionIndex + 1) % actionArray.length;
          left++;
        }
        break;
    }
  }

  return answer;
};

/**
 * @see https://leetcode.com/problems/spiral-matrix/
 *
 * 나선형 순회의 기초 문제.
 *
 * 나선형 순회의 동작의 순서는 4가지.
 * 1. 좌에서 우로
 * 2. 위에서 아래로
 * 3. 우에서 좌로
 * 4. 아래에서 위로
 *
 * 의 반복이다.
 *
 * 각 단계의 순회를 할 떄에 순회의 마지막인지를 구분하는 값인
 * top, right, bottom, left 포인터들을 정의해놓아야 한다.
 * 그리고 각 단계의 순회를 마칠때마다 이 포인터들을 증가 혹은 감소시켜서 변경해준다.
 * top이 bottom보다 커지거나, left가 right보다 커지게 되는 순간이
 * 나선형 순회가 완료된 시점이다.
 *
 *
 */
