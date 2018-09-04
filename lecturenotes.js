/* // 127.0.0.1.3000
let http = require('http');

// define app constants
const PORT = 3000; // always const always uses ""CAPITAL"

// create a server with a responder function
let server = http.createServer(function respondToRequests(request, response){
    console.log("Request: ", request.url) 
    //response.end("Hello from the other siiiiide..."); // ready to execute
    if (request.url === '/'){
    response.end(`
    <html>
        <body>
            <h1>LightHuse Labs</h1>
            <h2>course</h2>
        </body>
    </html>

    
    }
    else if (request.url === '/courses'){
        respond.end(``)

    }
`);
]});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT); // every app usues a port
}); 

//const express = require('express') ;

//res. render ('index') --- rendering index to respond

function foo( x ) {
    let y;
  
    if (x === 1) {
      y = 2;
    }
    console.log( y );
  }
  
  foo( 1 );
  console.log( y );

let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting);//"say Hello instead"
    }
    console.log(greeting);//"say Hi"
*/
const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // BEGINNING OF NEW STUFF

    response.on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))

    // END OF NEW STUFF
  });
}).listen(8080);