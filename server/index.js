const express= require('express');
const http=require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');


const hostname='localhost';
const port=4000;
const app = express();

app.use(morgan('dev')); // as this development version it will display additional info as require
app.use(bodyParser.json());// this allows parse the body of req message to format in json

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(express.static(__dirname + '../public')); // this tells to serve up the static files from __dirname
// this particular folder in the root folder of this project and inside the public folder.

//We have set up our server to serve up static files from the public folder,
// and if we just say localhost:3000 by default, it'll serve up the index.html file.
// app.use( (req,res,next)=> {  // 3 parameter is an optional parameter
   
//     console.log(req.headers);
//     res.statusCode=200;
//     res.setHeader('Content-type', 'text/html');
//     res.end('<html><body><h1>This is express example</h1></body></html>');
//      //http://localhost:4000/e it will serve the below response
// });
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
const server= http.createServer(app);

server.listen(port, hostname, ()=> {
    console.log(`Server running at: http//:${hostname}:${port}`);
})