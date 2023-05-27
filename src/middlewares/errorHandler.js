const { StatusCodes } = require('http-status-codes');
const {UPLOAD_ERROR} = require("../constants/error.codes")
const {MulterError} = require("multer")

async function handler(err, req, res, next) {
  if (err instanceof MulterError || err.message === UPLOAD_ERROR) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      "error":"Bad File",
      "extensionsAllowed":[".png",".jpg",".jpeg"],
      "maxFileSize": "5 MB"
    })
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({"error":"Internal Server Error"})
}
module.exports = handler;