import { URL } from "url"

const url = new URL("https://gooogle.com:5021/path/?query=string#hash")

console.log("Hash : ", url.hash)
console.log("Host : ", url.host)
console.log("Host Name : ", url.hostname)
console.log("href : ", url.href)
console.log("JSON format url : ", url.toJSON())
console.log("String format url : ", url.toString()) // same as JSON format
console.log("Origin : ", url.origin)
console.log("password : ", url.password)
console.log("Path : ", url.pathname)
console.log("Port : ", url.port)
console.log("Protocol : ", url.protocol)
console.log("Search word : ", url.search)
console.log("Search Params : ", url.searchParams)
console.log("User Name : ", url.username)