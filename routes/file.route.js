const express = require('express');
const  {getFiles, getFilesById, createFile, updateFileById, deleteFileById} = require('../controller/file.controller.js');
const router = express.Router();

router.get('/',getFiles);

router.post('/',createFile);

router.get('/:id',getFilesById);

router.put('/:id',updateFileById);
router.delete('/:id',deleteFileById);

module.exports = router