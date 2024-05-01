import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router();

// Route for the homepage
router.get('/', AppController.getHomepage);

// Routes for students
router.get('/students', (req, res) => {
  req.filePath = process.argv[2]; // Set the file path here
  StudentsController.getAllStudents(req, res);
});

router.get('/students/:major', (req, res) => {
  req.filePath = process.argv[2]; // Set the file path here
  StudentsController.getAllStudentsByMajor(req, res);
});

export default router;
