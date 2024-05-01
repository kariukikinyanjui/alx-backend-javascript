import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents (req, res) {
    try {
      const studentByField = await readDatabase(req.filePath);

      res.status(200).send('This is the list of our students\n' +
        Object.entries(studentByField)
          .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
          .map(([field, students]) => `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`)
          .join('\n')
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor (req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentByField = await readDatabase(req.filePath);
      const studentsInMajor = studentByField[major] || [];

      res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
