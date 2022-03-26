class CommonResponse {
  constructor(code, isSuccess, result, errorResponse = null) {
    this.code = code;
    this.isSuccess = isSuccess;
    this.result = result;
    this.errorResponse = errorResponse;
  }
}

module.exports = CommonResponse;
