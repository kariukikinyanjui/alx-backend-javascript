const process = require('process');

function displayMessage (message) {
  console.log(message);
}

function getUserName () {
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');

  return new Promise((resolve) => {
    process.stdin.once('data', (name) => {
      resolve(name.trim());
    });
  });
}

async function main () {
  displayMessage('Welcome to Holberton School, what is your name?');

  const name = await getUserName();

  displayMessage(`Your name is: ${name}`);
}
process.on('exit', () => {
  displayMessage('This important software is now closing');
});

main();
