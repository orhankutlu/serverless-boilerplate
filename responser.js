const responser = {
  success: (data, headers) => {
    const _body = {
      status: 'success'
    };
    if (data) {
      _body.data = data;
    }
    return responser.send({
      statusCode: 200,
      body: _body,
      headers
    });
  },
  error: (statusCode, err, message) => {
    const _body = {
      status: 'fail',
      err,
      message
    };
    return responser.send({
      statusCode: statusCode,
      body: _body
    });
  },
  send: ({ statusCode, body, headers }) => {
    const response = {
      statusCode,
      body: JSON.stringify(body),
    };
    if (headers) {
      response.headers = headers
    };
    return response;
  }
}

module.exports = responser;

