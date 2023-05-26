const MulterError = require('multer').MulterError;

async function handler(err, req, res, next) {
    if (err instanceof MulterError && err.code === 'LIMIT_FILE_SIZE') {
      console.log("file error")
      return res.send({ error: 'file size limit is 5M' })
    }
    next(err);

}
module.exports = handler;