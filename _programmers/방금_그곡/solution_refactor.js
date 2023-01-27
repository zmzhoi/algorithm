function calculateDuration(s, e) {
  const diff = new Date(`2000-01-01 ${e}:00`) - new Date(`2000-01-01 ${s}:00`);
  const diffPerMin = diff / 1000 / 60; // Parse millisecond to minute
  return diffPerMin;
}

function getMelodyLength(melody) {
  return melody.length - (melody.split('#').length - 1);
}

function isSameSong(playedMelody, melody) {
  let fromIndex = 0;

  while (fromIndex + melody.length <= playedMelody.length) {
    let index = playedMelody.indexOf(melody, fromIndex);

    if (index === -1) {
      return false;
    } else {
      fromIndex = index + melody.length;
      if (playedMelody[fromIndex] !== '#') {
        return true;
      }
    }
  }
}

function getPlayedMelody(melody, duration) {
  const melodyLength = getMelodyLength(melody);
  const repeatCount = Math.floor(duration / melodyLength);
  const tailCount = duration % melodyLength;

  const repeated = melody.repeat(repeatCount);
  let tail = '';
  for (let i = 0; i < melody.length; i++) {
    tail += melody[i];

    if (getMelodyLength(tail) === tailCount) {
      if (i + 1 < melody.length && melody[i + 1] !== '#') {
        break;
      }
      continue;
    }
  }

  return repeated + tail;
}

function solution(m, musicinfos) {
  let answer = '(None)';
  let currentAnswerDuration = -1;

  musicinfos.forEach((music) => {
    const [startTime, endTime, name, melody] = music.split(',');
    const duration = calculateDuration(startTime, endTime);
    const playedMelody = getPlayedMelody(melody, duration);

    if (isSameSong(playedMelody, m)) {
      if (currentAnswerDuration < duration) {
        answer = name;
        currentAnswerDuration = duration;
      }
    }
  });

  return answer;
}
