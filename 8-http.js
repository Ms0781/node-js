const http = require('http')


/*
 http.createServer((request,response)=>{})
    request : request object parameter is incoming request from client 
    respose : response object parameter is outgoing response from server based on client request
*/
const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.write("Welcome to home page")
        res.end()
    }

    if(req.url === "/about"){
        res.write("Welcome to about page.")
        res.end()
    }

    res.write('<h1>Oops 404 not found</h1>')
    res.end()
})

server.listen(3000) //3000 is port 