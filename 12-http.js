
const http = require('http')

const server = http.createServer((req, res) =>{
    res.write('Hey!!')
    if (req.url === '/'){
        res.end('Homepage')
    }
    if (req.url === '/about'){
        res.end("about page")
    }
    res.end()
})

server.listen(8080)
