const success = 'Success';

const getSuccess = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/xml',
  });
  response.write('<response><message>This is a successful response</message></response>');
  response.end();
};

const getBadRequest = (request, response) => {

  response.writeHead(400, {
    'Content-Type': 'text/xml',
  });
  response.write('<response><message>Missing valid query parameter set to true </message><id>badRequest</id></response>');
  response.end();

};


const getBadRequestVal = (request, response) => {

  response.writeHead(200, {
    'Content-Type': 'text/xml',
  });
  response.write('<response><message>This request has the required parameters </message></response>');
  response.end();

};


const getUnauth = (request, response) => {
    
     response.writeHead(401, {
    'Content-Type': 'text/xml',
  });
  response.write('<response><message>Missing loggIn query parameter set to yes </message><id>unauthorized</id></response>');
  response.end();

};

const getUnauthLog = (request, response) => {
    
     response.writeHead(200, {
    'Content-Type': 'text/xml',
  });
  response.write('<response><message>You have successfully viewed the content </message></response>');
  response.end();

};

const getforbidden = (request, response) => {
    
     response.writeHead(403, {
    'Content-Type': 'text/xml',
  });
  response.write('<response><message>You do not have access to this content </message><id>forbidden</id></response>');
  response.end();

};

const getNotimp = (request, response) => {
    
     response.writeHead(501, {
    'Content-Type': 'text/xml',
  });
  response.write('<response><message>A get request for this page has not been implemented yet. Check again later for updated content </message><id>notImplemented</id></response>');
  response.end();

};


const getInternarl = (request, response) => {
    
     response.writeHead(500, {
    'Content-Type': 'text/xml',
  });
  response.write('<response><message>Internal Server Error. Something went wrong </message><id>notfound</id></response>');
  response.end();

};

const getNotFound = (request, response) => { 
    
  response.writeHead(404, {
    'Content-Type': 'text/xml',
  });
  response.write('<response><message>The page you are looking for was not found </message><id>notFound</id></response>');
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