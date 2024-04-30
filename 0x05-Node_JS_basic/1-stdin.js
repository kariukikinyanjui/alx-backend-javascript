// Welcome message and prompt user name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Sets up a listener for the readable event
process.stdin.on('readable', () => {
  const name = process.stdin.read();

  // Check if name has a value(not null)
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Sets up a listener for the end event
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
