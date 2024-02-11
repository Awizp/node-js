import http from "http"
import fs from "fs"

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, "OK", { "Content-Type": "text/html" })
        fs.readFile("./Node/Serving Pages/public/home.html", (error, data) => {
            if (error) console.log(error)
            res.end(data)
        })
    }
    else if (req.url === "/about") {
        res.writeHead(202, "Response OK", { "Content-Type": "text/html" })
        fs.readFile("./Node/Serving Pages/public/about.html", (error, data) => {
            if (error) console.log(error)
            res.end(data)
        })
    }
    else {
        res.writeHead(404, "Bad Request", { "Content-Type": "text/html" })
        res.end("Oh oh! Page not found.")
    }
})

server.listen(4000, () => console.log("Server Up!"))