const AWS_S3 = require("aws-sdk/clients/s3");
const path = require("path");
const { v4 } = require("uuid");

const {
  S3_ACCESS_KEY,
  S3_BUCKET,
  S3_REGION,
  S3_SECRET_KEY,
} = require("../configs/config");

const s3 = new AWS_S3({
  accessKeyId: S3_ACCESS_KEY,
  secretAccessKey: S3_SECRET_KEY,
  signatureVersion: "v4",
  region: S3_REGION,
});

const uploadFile = async (fileToUpload, itemType, itemId) => {
  const Key = _buildFilePath(itemType, itemId, fileToUpload.name);

  await s3
    .upload({
      Bucket: S3_BUCKET,
      Body: fileToUpload.data,
      ContentType: itemType.type,
      Key,
      ServerSideEncryption: "AES256",
      StorageClass: "STANDARD",
    })
    .promise();

  // Body: file,
  // ContentType: file.type,
  // Key: key,
  // ACL: "private",
  // Bucket: "mybucket",
  // ServerSideEncryption: "AES256",
  // StorageClass: "STANDARD"
  //Missing required key 'Bucket' in params ERROR

  const signedUrl = s3.getSignedUrl("getObject", { Bucket: S3_BUCKET, Key });

  return signedUrl;
};

const getPhoto = async () => {
  let key = randomKey();
  return s3.getObject({
    Bucket: S3_BUCKET,
    Key: key,
  });
};

// http://localhost:5000/images/user/627165a3930f39c30b67f34e/b164e526-22ad-4020-ba7e-559fc48f4cdf.jpg

function _buildFilePath(itemType, itemId, fileName = "") {
  // make path to our photo

  // const extension = path.extname(fileName); // .jpg
  const ext = fileName.split(".").pop(); // jpg

  return path.normalize(`${itemType}/${itemId}/${v4()}.${ext}`); //unique name for photo
}

module.exports = {
  uploadFile,
  getPhoto,
};
