import fs from "fs"

for (let i = 0; i < 1000; i++) {
    fs.writeFile("./Node/stream/data.txt", `${i}\n`, { flag: "a" }, (error) => {
        if (error) throw error
    })
}