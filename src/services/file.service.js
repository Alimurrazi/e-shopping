const cloudinary = require('cloudinary').v2;

const saveFile = async (body) => {
  const file = await cloudinary.uploader.upload(body.file);
  return file;
};

module.exports = {
  saveFile,
};
