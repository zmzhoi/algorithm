function solution(skill, skill_trees) {
  let count = 0;
  let currentIndex;
  const skillAsArray = skill.split('');
  const skillMap = skillAsArray.reduce((acc, skill) => {
    acc[skill] = true;
    return acc;
  }, {});

  for (let i = 0; i < skill_trees.length; i++) {
    currentIndex = 0;
    const skills = skill_trees[i];
    let j;
    for (j = 0; j < skills.length; j++) {
      const skill = skills[j];
      if (skillMap[skill]) {
        if (skillAsArray[currentIndex] !== skill) {
          break;
        }
        currentIndex++;
      }
    }
    if (j === skills.length) {
      count++;
    }
  }

  return count;
}
