const router = require('express').Router();
const {getFile,getFiles} = require("../controllers/file.controller")
const file_upload = require("../multer/config");

router.post("/upload",file_upload,(req,res)=>res.json({"message":"success","file":req.file.filename}));
router.get("/:filename",getFile);
router.get("/",getFiles);

module.exports = router;