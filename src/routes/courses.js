const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CourseController');

router.post('/store', coursesController.store);
router.get('/create', coursesController.create);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.delete);
router.patch('/:id/restore', coursesController.restore);
router.delete('/:id/force', coursesController.forceDelete);
router.get('/:slug', coursesController.show);

module.exports = router;
