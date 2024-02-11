import http from "http"

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, "OK", { "Content-Type": "text/html" })
        res.end("<a href='/contact'>Contact page</a>")
    }
    else if (req.url === "/about") {
        res.writeHead(202, "Res OK", { "Content-Type": "text/html" })
        res.end("<h1>About</h1>")
    }
    else if (req.url === "/contact") {
        res.writeHead(202, "Res OK", { "Content-Type": "text/html" })
        res.end("<h1>Contact</h1>")
    }
    else {
        res.writeHead(404, "BAD", { "Content-Type": "text/html" })
        res.end("<h2>Oh Oh! Page not found</h2>")
    }
})

server.listen(4000, () => { console.log("server up!") })