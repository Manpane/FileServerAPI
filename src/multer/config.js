const multer = require('multer');
const path = require('path');
const {sanitize_filename} = require("../utils/file-utils")

const storage = multer.diskStorage(
    {
        destination:(req,file,c_)=>{
            c_(null,"files");
        },
        filename:(req,file,c_)=>{
            c_(null,Date.now()+"-"+ sanitize_filename(file.originalname));
        }
    }
)
var size_limit = { fileSize: 5 * 1024 * 1024} // file size limit to 5 MB

//filter function to filter out non .xlsx files
const filter_upload = (req, file, c_) => {
    if (file.mimetype.split("/").includes("image")){
        if (![".jpg",".png",".jped"].includes(path.extname(file.originalname.toLowerCase()))){
            c_(null,false);
        }
    }
    c_(null,true);
}

module.exports = multer({
    storage:storage,fileFilter:filter_upload,
    limits:size_limit}).single("file")