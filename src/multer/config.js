const multer = require('multer');
const path = require('path');
const {sanitize_filename} = require("../utils/security.utils")
const {UPLOAD_FILES_DIRECTORY_PATH} = require("../constants/files.constants")
const storage = multer.diskStorage(
    {
        destination:(req,file,c_)=>{
            c_(null,UPLOAD_FILES_DIRECTORY_PATH);
        },
        filename:(req,file,c_)=>{
            c_(null,Date.now()+"-"+ sanitize_filename(file.originalname));
        }
    }
)
var size_limit = { fileSize: 1024 * 1024 * 1024} // file size limit to 5 MB

const filter_upload = (req, file, c_) => {
    // only accept image files of extension jpg, png and jpeg
    // if (file.mimetype.split("/").includes("image") && 
    // [".jpg",".png",".jpeg"].includes(path.extname(file.originalname.toLowerCase()))
    // ){
    //     c_(null,true);
    // }else{
    //     c_(null,false);
    // }
    c_(null,true);
}

module.exports = multer({
    storage:storage,fileFilter:filter_upload,
    limits:size_limit}).single("file")