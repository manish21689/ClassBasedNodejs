class ResponseHandler {
  static success(res, result) {
    res.status(200).json({
      status: 'Success',
      result
    });
  }

  static error(res, error) {
    res.status(500).json({
      status: 'Error',
      error: error.message
    });
  }

  static notFound(res) {
    res.status(404).json({
      error: 'Page not found'
    });
  }

  static networkError(res) {
    res.status(500).json({
      error: 'Network error'
    });
  }
}

module.exports = ResponseHandler;
