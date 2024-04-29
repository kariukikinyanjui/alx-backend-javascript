const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter(line => line.trim() !== '');
        // Initialize counters for each field
        let csCount = 0;
        let sweCount = 0;
        const csStudents = [];
        const sweStudents = [];

        // Loop through each line and count students in each field
        for (const line of lines) {
          const [, , , field] = line.split(',');
          if (field === 'CS') {
            csCount++;
            csStudents.push(line.split(',')[0]);
          } else if (field === 'SWE') {
            sweCount++;
            sweStudents.push(line.split(',')[0]);
          }
        }
        // Log the total number of students
        console.log(`Number of students: ${lines.length}`);

        // Log the number of students in each field along with their names
        console.log(`Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}`);
        console.log(`Number of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`);
        resolve();
      }
    });
  });
}

module.exports = countStudents;