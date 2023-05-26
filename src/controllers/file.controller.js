const fs = require('fs');
const { StatusCodes } = require('http-status-codes');
const path = require('path');

function getFile(req,res){
    let filename = req.params.filename
    let filepath = path.resolve(__dirname+"/../../files/"+filename);
    if (fs.existsSync(filepath)){
        return res.sendFile(filepath);
    }else{
        res.status(StatusCodes.NOT_FOUND).json({"error":"File Not Found"});
    }
}

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
module.exports = {getFile,getFiles};
