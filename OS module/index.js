const os = require("os")

console.log("Architectre : ", os.arch())
console.log("CPU : ", os.cpus())
console.log("Platform : ", os.platform())
console.log("user-info : ", os.userInfo())
console.log("Version : ", os.version())
console.log("Host name : ", os.hostname())
console.log("Home directory : ", os.homedir())
console.log("Nework interface : ", os.networkInterfaces())
console.log("Machine : ", os.machine())
console.log("Release : ", os.release())
console.log("Total Memory : ", os.totalmem())
console.log("Free Memory : ", os.freemem())