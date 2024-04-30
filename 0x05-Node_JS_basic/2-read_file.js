const fs = require('fs');

const processStudents = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error('Could not locate student data file.');
  }
  if (!fs.statSync(filePath).isFile()) {
    throw new Error('Student data file is not a valid file.');
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const dataLines = fileContents.trim().split('\n');

  const studentByField = {};
  const fieldHeaders = dataLines[0].split(',');
  const studentProperties = fieldHeaders.slice(0, fieldHeaders.length - 1);

  for (const line of dataLines.slice(1)) {
    const studentData = line.split(',');
    const studentValues = studentData.slice(0, studentData.length - 1);
    const program = studentData[studentData.length - 1];
    if (!Object.keys(studentByField).includes(program)) {
      studentByField[program] = [];
    }
    const studentEntry = studentProperties.map((prop, idx) => [prop, studentValues[idx]]);
    studentByField[program].push(Object.fromEntries(studentEntry));
  }

  const totalStudents = Object.values(studentByField).reduce((prev, curr) => prev + curr.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  for (const [program, students] of Object.entries(studentByField)) {
    const studentNames = students.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${program}: ${students.length}. List: ${studentNames}`);
  }
};

module.exports = processStudents;
