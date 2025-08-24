const jsonfile = require('jsonfile');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

// List of dates you want
const DATES = [
  "2025-07-19T10:00:00+05:30",
  "2025-08-22T10:00:00+05:30"
];

(async () => {
  const git = simpleGit();

  for (const DATE of DATES) {
    const data = { date: DATE };

    // Write date to file
    await jsonfile.writeFile(FILE_PATH, data);

    // Add + commit with the date
    await git.add([FILE_PATH]).commit(DATE, { '--date': DATE });
  }

  // Push once after all commits
  await git.push();
})();
