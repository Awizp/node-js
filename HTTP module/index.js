import http from "http"

const server = http.createServer((req, res) => {
    console.log(req)
    // res.setHeader("Content-Type", "text/html")
    // res.statusCode = 301
    // res.statusCode = "Content OK"

    res.writeHead(202, "resonse ok", { "Content-Type": "text/html" })
    res.write("<h1>Server is running in Node js</h1>")
})

// server running on 4000
server.listen(4000, () => {
    return console.log("server up!")
})
