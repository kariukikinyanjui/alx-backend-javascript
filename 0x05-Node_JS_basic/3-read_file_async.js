const fs = require('fs');

const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter(line => line.trim() !== '');
        const studentByField = {};

        for (const line of lines.slice(1)) {
          const [firstname, , , field] = line.split(',');
          if (!studentByField[field]) {
            studentByField[field] = [];
          }
          studentByField[field].push(firstname);
        }
        const totalStudents = lines.length - 1;
        console.log(`Number of students in ${totalStudents}`);

        for (const [field, students] of Object.entries(studentByField)) {
          const studentNames = students.join(', ');
          console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames}`);
        }
        resolve();
      }
    });
  });
};

module.exports = countStudents;
