

const getBadRequest = (request, response) => {
  const responseMes = {
    message: 'Missing valid query parameter set to true',
    id: 'badRequest',
  };
  const stringMessage = JSON.stringify(responseMes);

  response.writeHead(400, {
    'Content-Type': 'application/json',
  });
  response.write(stringMessage);
  response.end();
};

const getBadRequestVal = (request, response) => {
  const responseMes = {
    message: 'This request has the required parameters',
  };
  const stringMessage = JSON.stringify(responseMes);

  response.writeHead(200, {
    'Content-Type': 'application/json',
  });
  response.write(stringMessage);
  response.end();
};

const getUnauth = (request, response) => {
  const responseMes = {
    message: 'Missing loggedIn query parameter set to yes',
    id: 'unauthorized',
  };
  const stringMessage = JSON.stringify(responseMes);

  response.writeHead(401, {
    'Content-Type': 'application/json',
  });
  response.write(stringMessage);
  response.end();
};

const getUnauthLog = (request, response) => {
  const responseMes = {
    message: 'You have successfully viewed the content',
  };
  const stringMessage = JSON.stringify(responseMes);

  response.writeHead(200, {
    'Content-Type': 'application/json',
  });
  response.write(stringMessage);
  response.end();
};

const getforbidden = (request, response) => {
  const responseMes = {
    message: 'You do not have access to this content',
    id: 'forbidden',
  };
  const stringMessage = JSON.stringify(responseMes);

  response.writeHead(403, {
    'Content-Type': 'application/json',
  });
  response.write(stringMessage);
  response.end();
};

const getNotimp = (request, response) => {
  const responseMes = {
    message: 'A get request for this page has not been implemented yet. Check again later for updated content',
    id: 'notImplemented',
  };
  const stringMessage = JSON.stringify(responseMes);

  response.writeHead(501, {
    'Content-Type': 'application/json',
  });
  response.write(stringMessage);
  response.end();
};


const getInternarl = (request, response) => {
  const responseMes = {
    message: 'Internal Server Error. Something went wrong',
    id: 'notfound',
  };
  const stringMessage = JSON.stringify(responseMes);

  response.writeHead(500, {
    'Content-Type': 'application/json',
  });
  response.write(stringMessage);
  response.end();
};

const getSuccess = (request, response) => {
  const responseMes = {
    message: 'this is a successful response',
  };
  const stringMessage = JSON.stringify(responseMes);

  response.writeHead(200, {
    'Content-Type': 'application/json',
  });
  response.write(stringMessage);
  response.end();
};

const getNotFound = (request, response) => {
  const responseMes = {
    message: 'The page you are looking for was not found',
    id: 'notFound',
  };
  const stringMessage = JSON.stringify(responseMes);

  response.writeHead(404, {
    'Content-Type': 'application/json',
  });
  response.write(stringMessage);
  response.end();
};

module.exports.getBadRequest = getBadRequest;
module.exports.getUnauth = getUnauth;
module.exports.getforbidden = getforbidden;
module.exports.getNotimp = getNotimp;
module.exports.getInternarl = getInternarl;
module.exports.getSuccess = getSuccess;
module.exports.getNotFound = getNotFound;
module.exports.getBadRequestVal = getBadRequestVal;
module.exports.getUnauthLog = getUnauthLog;

