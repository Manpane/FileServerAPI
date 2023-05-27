const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const {getFile,getFiles,uploadFile} = require("../controllers/file.controller")
const file_upload = require("../multer/config");
const errorHandler = require("../middlewares/errorHandler");

router.post("/upload",file_upload,uploadFile);
router.get("/:filename",getFile);
router.get("/",getFiles);

router.use(errorHandler);

module.exports = router;