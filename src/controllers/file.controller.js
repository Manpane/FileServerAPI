const fs = require('fs');
const { StatusCodes } = require('http-status-codes');
const path = require('path');
const {UPLOAD_ERROR} = require("../constants/error.codes")


// Controller Functions

// Get single file with filename
function getFile(req,res){
    let filename = req.params.filename
    let filepath = path.resolve(__dirname+"/../../files/"+filename);
    if (fs.existsSync(filepath)){
        return res.sendFile(filepath);
    }else{
        res.status(StatusCodes.NOT_FOUND).json({"error":"File Not Found"});
    }
}

// Get all files
function getFiles(req,res){
    try {
        let filespath = path.resolve(__dirname+"/../../files/");
        let dirList = fs.readdirSync(filespath);
        let files = dirList.filter((path=>fs.statSync(filespath+"/"+path).isFile())) 
        return res.status(StatusCodes.OK).json({"files":files,"total_files":files.length});
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({"error":"Server error"})
    }
}


//Upload file response controller
function uploadFile(req,res){
    let uploaded_filename = req.file?.filename;
    if (!uploaded_filename){
        throw new Error(UPLOAD_ERROR)
    }
    return res.status(StatusCodes.OK).json({
        "file":req.file.filename,
        "url":`http://localhost:8000/api/files/${req.file.filename}`
    })
}


module.exports = {getFile,getFiles,uploadFile};
