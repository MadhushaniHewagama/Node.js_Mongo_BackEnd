###### for restart the server after every changes used nodemon
npm install -g nodemon 
###### run the server
nodemon server
###### manage http request install express
npm install --save express

###### To handle the POST request coming from the front-end app,
npm install --save body-parser

#### Quiz 01

## HTTP - status codes
    1## - Informational (request has been received and the process is continuing)
        100 - continue 
        101 - switching protocols
    2## - Success (Action was successfully received, understood and accepted)
        200 - ok
        201 - created
        202 - accepted
        203 - Non-authoritative information
        204 - No content
        205 - Reset content
        206 - Partial content
    3## - Redirection (Further action must be taken in order to complete the request)
        300 - Multiple choices
        301 - Moved Permanently
        302 - Found
        303 - See other
        304 - Not modified
        305 - use proxy
        306 - unused
        307 - Temporary redirect
    4## - Client Error (request contains incorrect syntax or cannot be fulfilled)
        400 - Bad request
        401 - Unauthorized
        402 - Payment Required
        403 - Forbidden
        404 - Not Found
        405 - Method Not Allowed
        406 - Not Acceptable
        407 - Proxy Authentication Required
        408 - Request Timeout
        409 - Conflict
        410 - Gone
        411 - Length Required
        412 - Precondition Failed
        413 - Request Entity too large
        414 - Request-url too long
        415 - Unsupported Media Type
        416 - Requested Range not satisfiable
        417 - Expectation Failed
    5## - Server Error (Server Failed to fulfill an apparently valid request)
        500 - Internal Server Error
        501 - Not Implemented
        502 - Bad Gateway
        503 - Service Unavailable
        504 - Gateway Timeout
        505 - HTTP version not supported
CORS(Cross-Origin Resource Sharing)