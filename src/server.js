const http = require('http');

const htmlHandler = require('./htmlResponses.js');

const textHandler = require('./textResponses.js');

const jsonHandler = require('./jsonResponses.js');

const imageHandler = require('./imageResponses.js');

const xmlHandler = require('./xmlResponses.js');


const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  var headers = request.headers;
    var method = request.method;
    
    request.on('error', function(err){
        console.error(error.stack);
    });

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
          
    case '/success':
          if(headers['content-type'] == "text/xml"){
      xmlHandler.getSuccess(request, response);
              } else {
            jsonHandler.getSuccess(request, response);
              }
      break;
          
    case '/badRequest':
            if(headers['content-type'] == "text/xml"){
      xmlHandler.getBadRequest(request, response);
              } else {
      jsonHandler.getBadRequest(request, response);
              }
      break;
          
          case '/badRequest?valid=true':
            if(headers['content-type'] == "text/xml"){
      xmlHandler.getBadRequestValgetBadRequestVal(request, response);
              } else {
      jsonHandler.getBadRequestVal(request, response);
              }
      break;
          
    case '/unauthorized':
    if(headers['content-type'] == "text/xml"){
      xmlHandler.getUnauth(request, response);
              } else {
      jsonHandler.getUnauth(request, response);
              }
      break;
          
            case '/unauthorized?loggedin=yes':
    if(headers['content-type'] == "text/xml"){
      xmlHandler.getUnauthLog(request, response);
              } else {
      jsonHandler.getUnauthLog(request, response);
              }
      break;
          
          
    case '/forbidden':
     if(headers['content-type'] == "text/xml"){
      xmlHandler.getforbidden(request, response);
              } else {
      jsonHandler.getforbidden(request, response);
              }
      break;
          
    case '/internal':
       if(headers['content-type'] == "text/xml"){
      xmlHandler.getInternarl(request, response);
              } else {
      jsonHandler.getInternarl(request, response);
              }
      break;
          
    case '/notImplemented':
      if(headers['content-type'] == "text/xml"){
      xmlHandler.getNotimp(request, response);
              } else {
      jsonHandler.getNotimp(request, response);
              }
      break;
          
    default:
      if(headers['content-type'] == "text/xml"){
      xmlHandler.getNotFound(request, response);
              } else {
      jsonHandler.getNotFound(request, response);
              }
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
