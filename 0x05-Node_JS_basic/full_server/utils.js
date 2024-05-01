import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentByField = {};

        const lines = data.trim().split('\n').filter(line => line.trim() !== ''); // Remove empty lines

        for (const line of lines.slice(1)) {
          const [firstname, , , field] = line.split(',');
          if (!studentByField[field]) {
            studentByField[field] = [];
          }
          studentByField[field].push(firstname);
        }

        resolve(studentByField);
      }
    });
  });
};
