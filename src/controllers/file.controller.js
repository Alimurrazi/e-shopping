const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const CommonResponse = require('../utils/CommonResponse');
const { fileService } = require('../services');

const saveFile = catchAsync(async (req, res) => {
  const file = await fileService.saveFile(req.body);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, file));
});

module.exports = {
  saveFile,
};
