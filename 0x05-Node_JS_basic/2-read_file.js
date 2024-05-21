const fs = require('fs');

const countStudents = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error('Cannot load the database');
    }
    if (!fs.statSync(filePath).isFile()) {
      throw new Error('Cannot load the database');
    }

    const fileContents = fs.readFileSync(filePath, 'utf-8').trim();
    if (!fileContents) {
      throw new Error('Cannot load the database');
    }

    const dataLines = fileContents.split('\n').filter((line) => line.trim() !== '');
    if (dataLines.length < 2) {
      console.log('Number of students: 0');
      return;
    }

    const studentByField = {};
    const headers = dataLines[0].split(',');
    const fieldHeaders = headers.slice(0, -1);
    const fieldIndex = headers.length - 1;

    for (const line of dataLines.slice(1)) {
      const studentData = line.split(',');
      if (studentData.length !== headers.length) {
        // skip lines with incorrect number of columns
        continue;
      }
      const program = studentData[fieldIndex];
      if (!studentByField[program]) {
        studentByField[program] = [];
      }
      const studentEntry = {};
      fieldHeaders.forEach((header, idx) => {
        studentEntry[header] = studentData[idx];
      });
      studentByField[program].push(studentEntry);
    }

    const totalStudents = Object.values(studentByField).reduce((prev, curr) => prev + curr.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [program, students] of Object.entries(studentByField)) {
      const studentNames = students.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${program}: ${students.length}. List: ${studentNames}`);
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = countStudents;
