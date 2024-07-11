const express = require('express');
const router = express.Router();
const multer = require('multer');
const fileController = require('../controllers/fileController');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.array('files'), fileController.uploadFiles);

module.exports = router;
