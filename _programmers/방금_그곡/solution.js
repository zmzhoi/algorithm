function calculateDuration(s, e) {
  const [sh, sm] = s.split(":");
  const [eh, em] = e.split(":");

  return (Number(eh) - Number(sh)) * 60 + (Number(em) - Number(sm));
}

function getMelodyLength(melody) {
  return melody.length - (melody.split("#").length - 1);
}

function isThisSong(playedMelody, melody) {
  let index;
  let fromIndex = 0;
  while (fromIndex + melody.length <= playedMelody.length) {
    index = playedMelody.indexOf(melody, fromIndex);
    if (index === -1) {
      return false;
    }

    const endIndex = index + melody.length;
    if (playedMelody[endIndex] !== "#") {
      return true;
    } else {
      fromIndex = endIndex;
    }
  }

  return false;
}

function getPlayedMelody(melody, melodyLength, duration) {
  const repeatCount = Math.floor(duration / melodyLength);
  let remainedCount = duration % melodyLength;

  let i = 0;
  let remainedMelody = "";
  for (const char of melody.split("")) {
    i++;
    remainedMelody += char;
    if (char !== "#") {
      remainedCount--;
    }
    if (remainedCount === 0 && melody[i] !== "#") {
      break;
    }
  }

  return melody.repeat(repeatCount) + remainedMelody;
}

function solution(m, musicinfos) {
  let answer = "(None)";
  let currentAnswerDuration = -1;

  musicinfos.forEach((music) => {
    const [startTime, endTime, name, melody] = music.split(",");
    const duration = calculateDuration(startTime, endTime);

    const melodyLength = getMelodyLength(melody);
    const playedMelody = getPlayedMelody(melody, melodyLength, duration);

    if (isThisSong(playedMelody, m)) {
      if (currentAnswerDuration < duration) {
        answer = name;
        currentAnswerDuration = duration;
      }
    }
  });

  return answer;
}
