// npm install will install all of the different dependencies listed in the package.json
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) =>{

    // lodash
    const num = _.random(0, 20);
    console.group(num);

    const greet = _.once(() => {
        console.log('hey');
    });

    greet();
    greet();

    // set header and content type
    res.setHeader('Content-type', 'text-html')
    let path = './views/';
    
    switch (req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            path += 'about.html'
            res.statusCode = 301;
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) =>{
        if (err){
            console.log(err);
            res.end()
        } else {
           
            res.end(data);
        }
    })
   
});


server.listen(3000, 'localhost', () => {
    console.log('listen for requests on port 3000');
})