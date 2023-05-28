const router = require('express').Router();
const {getFile,getFiles,respond_upload,deleteFile} = require("../controllers/file.controller")
const file_upload = require("../multer/config");
const errorHandler = require("../middlewares/errorHandler");

router.post("/upload",file_upload,respond_upload);
router.route("/:filename").get(getFile).delete(deleteFile);
router.get("/",getFiles);

router.use(errorHandler);

module.exports = router;