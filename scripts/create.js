const chalk = require('chalk');
const fs = require('fs');
const mkdirp = require('mkdirp');

// 파라미터 검증
if (!validateArgv()) {
  process.exit(1);
}

// 파라미터 추출
const argv = process.argv;
const platform = argv[2] === 'p' ? 'programmers' : 'baekjoon';
const name = argv[3];
const path = `${platform}/${name}`;

// 해당 디렉토리가 이미 존재하는지 검증
if (fs.existsSync(path)) {
  console.log(chalk.red(`/${platform}/${name} is already exists!`));
  process.exit(1);
}

// 해당 디렉토리 및 파일 생성
const solution = {
  path: `${path}/solution.js`,
  data: 'function solution() {\n\n}',
};
const link = {
  path: `${path}/LINK.MD`,
  data: '',
};

try {
  mkdirp.sync(path);
  fs.writeFileSync(solution.path, solution.data, 'utf-8');
  fs.writeFileSync(link.path, link.data, 'utf-8');
  console.log(chalk.green('Success!'));
} catch (error) {
  console.log(chalk.red('Failure!'));
  console.log('');
  console.log(chalk.yellow(error));
  process.exit(1);
}

function validateArgv() {
  if (!['b', 'p'].includes(process.argv[2]) || !process.argv[3]) {
    console.log(chalk.yellow('You should set platform and name.'));
    console.log(
      'in case of baekjoon : ' + chalk.yellow('npm run create') + ' ' + chalk.red('b 3111'),
    );
    console.log(
      'in case of programmers : ' +
        chalk.yellow('npm run create') +
        ' ' +
        chalk.red('p 해시_완주하지 못한 선수'),
    );
    return false;
  }

  return true;
}
