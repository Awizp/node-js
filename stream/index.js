import { createReadStream } from "fs"

const stream = createReadStream("./Node/stream/data.txt", { encoding: "utf8" })

stream.on("data", (data) => {
    console.log(data)
})