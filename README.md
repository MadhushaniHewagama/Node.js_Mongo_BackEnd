###### for restart the server after every changes used nodemon
npm install -g nodemon 
###### run the server
nodemon server
###### manage http request install express
npm install --save express

###### To handle the POST request coming from the front-end app,
npm install --save body-parser

###### CRUD 
    Create
    Read
    Update
    Delete
#################################################################################################################################
#### Quiz 01 Summary

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
## CORS(Cross-Origin Resource Sharing)
    3 ways of fix the CORS Error
    #01 install the Allow-Control-Allow-Origin plugin - this is good solution for local machine and not good enough when publish
    #02 send your request to a proxy
    #03 build your own proxy

# The listener passed as an argument to createServer() will receive the request and response objects as arguments, generally shortened to  req  and  res .  The  next  function only exists within an Express app, and the listener does not receive any environment variables as arguments.
# The final middleware in a chain must send the response back to the client to prevent the request from timing out.
# A piece of middleware calls the next function when it needs to pass execution on to the next piece of middleware in the chain.
# A 200 HTTP status code is the standard code for a successful request, especially in a GET request.
# A 201 status generally means that the request has been fulfilled, resulting in the creation of a new resource.
# CORS security is a default security measure to prevent resources from being used by unauthorised origins.
# Setting these headers allows requests to be sent and received with no CORS security errors.
# When an HTTP request is received by the server, its body is not generally in an easily usable form.  The body-parser package parses the request body and formats it to make it easier to use.

## Create cluster in mongodb atlas 

## Install mongoose package
npm install --save mongoose
***One of the advantages of using Mongoose to manage our MongoDB database is that we can implement strict data schemas to make our app more robust.


######  Database for authentication info

# in database dont store password as plain text, store them as a hash or encrypted string.

# Rainbow table is a precomputed table for reversing cryptographic hash funchition.(usually use for recovering a password or credit card numbers, more stroger than brute force attack and use less computer processing time)

##### Installing a validation package to pre-validate information before saving 
npm install --save mongoose-unique-validator

# encryption package -> bcrypt 
                               --> * is a password hashing function, based on the Blowfish symmetric block cipher
                               --> * brust force attacks slower and minimize the impact
                               --> use technique called Key Stretching
                               --> one way


##### Install bcrypt ackage for  signup function
npm install --save bcrypt

#### Create authentication token
Token based authentication using -> JWT Json Web Token
# Libraries
        --> Python - pyjwt
        --> Node.js - jsonwebtoken 
        --> Java - java-jwt
        --> Ruby - ruby-jwt
        --> Go- jwt-go

# create and verify authentication tokens
npm install --save jsonwebtoken

# In chrome DevTool Network tab to chack 
                                    --> Authorization header 
                                    --> "Bearer" and a long encoded strig is the token

#### Set up authentication middleware
#################################################################################################################################
###### Quiz 02  Summary
# Controllers contain the business logic, and are generally imported by routers which attribute that logic to specific routes.
# It is never safe to store unencrypted passwords, no matter how protected the database itself may be.  You never know what could cause data to leak, and give open access to user passwords.
# The bcrypt package allows for secure string encryption using a one-way algorithm.
# It is virtually impossible to calculate the original string from a bcrypt hash, but the bcrypt package can compare two hashes and easily tell if they were both produced by the same original string (see P vs NP problem for more information on the mathematics behind this).
# JSON web tokens are encoded, not encrypted, strings which can be decoded as long as you know the secret string.
# You can set an expiration delay for JSON web tokens, rendering them invalid after a given time.
# JSON web tokens are secure because: 
                                  --> There is no session stored on the server which can be hijacked.
                                  --> Their encoded payload can include data to help confirm that the client sending the request is indeed who they claim to be (using user IDs for example).
                                  --> They are virtually impossible to forge without prior knowledge of the secret string used to sign them.
# While there is no absolute rule, most APIs require that authenticated requests place their token in their Authorization header.

## Accept incomin files with multer

# install multer package which allows us to handle incoming files in HTTP requests
npm install --save multer