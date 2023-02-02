function calculateFee({ totalMin, defaultFee, defaultMin, minUnit, feePerUnit }) {
  if (totalMin <= defaultMin) {
    return defaultFee;
  }

  return defaultFee + Math.ceil((totalMin - defaultMin) / minUnit) * feePerUnit;
}

function calculateTimeDiff(s, e) {
  const [sh, sm] = s.split(':');
  const [eh, em] = e.split(':');
  return parseInt(eh) * 60 + parseInt(em) - (parseInt(sh) * 60 + parseInt(sm));
}

function solution(fees, records) {
  const parkMap = {};
  const feeMap = {};
  const timeMap = {};

  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    const [time, number, type] = record.split(' ');

    if (type === 'IN') {
      parkMap[number] = time;
      continue;
    }

    const totalMin = calculateTimeDiff(parkMap[number], time);
    delete parkMap[number];

    timeMap[number] = (timeMap[number] || 0) + totalMin;
  }

  Object.entries(parkMap).forEach(([number, parkTime]) => {
    timeMap[number] = (timeMap[number] || 0) + calculateTimeDiff(parkTime, '23:59');
    delete parkMap[number];
  });

  const [defaultMin, defaultFee, minUnit, feePerUnit] = fees;
  Object.entries(timeMap).forEach(([number, totalMin]) => {
    feeMap[number] = calculateFee({ totalMin, defaultMin, defaultFee, minUnit, feePerUnit });
  });

  return Object.keys(feeMap)
    .sort()
    .map((key) => feeMap[key]);
}
