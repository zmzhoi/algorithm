// 코드라인 줄임 -> 유틸함수 제거 및 간소화.
// 'A#'과 같은 길이가 2인 음 때문에 변수가 많음
// => 이런 음을 길이 1로 줄이기 위해 특정 문자(소문자)로 치환. (정규식 사용)
function solution(m, musicinfos) {
  let answer = "(None)";
  let currentAnswerDuration = -1;

  musicinfos.forEach((music) => {
    const [s, e, name, melody] = music.split(",");
    const duration =
      (new Date(`2000-01-01 ${e}:00`) - new Date(`2000-01-01 ${s}:00`)) /
      1000 /
      60;
    const parsedMelody = melody.replaceAll(/[A-Z]#/g, (char) =>
      char[0].toLowerCase()
    );
    const parsedTargetMelody = m.replaceAll(/[A-Z]#/g, (char) =>
      char[0].toLowerCase()
    );
    const playedMelody =
      parsedMelody.repeat(Math.floor(duration / parsedMelody.length)) +
      parsedMelody.slice(0, duration % parsedMelody.length);

    if (playedMelody.indexOf(parsedTargetMelody) !== -1) {
      if (currentAnswerDuration < duration) {
        answer = name;
        currentAnswerDuration = duration;
      }
    }
  });

  return answer;
}
