const config = require('./config.json');
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')

const bucketName = config.s3.BUCKET_NAME;
const albumName = config.s3.ALBUM_NAME;
const region = config.s3.REGION;
const accessKeyId = config.s3.ACCESS_ID;
const secretAccessKey = config.s3.ACCESS_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

// uploads a file to s3
function uploadFile(file) {
  console.log(file);
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
  }

  return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile


// downloads a file from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream