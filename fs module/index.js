import * as fs from "fs/promises"

// make a directory
try {
    await fs.mkdir("D://nodejsHuxn/new", { recursive: true })
} catch (error) {
    console.error(error)
}

// Read the directory files
try {
    const dir = await fs.readdir("D://nodejsHuxn")
    console.log(dir)
} catch (error) {
    console.error(error)
}

// Remove the directory
try {
    await fs.rmdir("D://nodejsHuxn//new")
    console.log("file removed...")
} catch (error) {
    console.error(error)
} //it will remove directory if that was empty only or it will give error

// Create and write file
try {
    const file = await fs.writeFile("D://nodejsHuxn//text.txt", "Hello da Mapla, Theni la irunthu!")
    console.log(file)
    console.log("file created...")
} catch (error) {
    console.error(error)
}

// Read the file
try {
    const info = await fs.readFile("D://nodejsHuxn//text.txt", "utf-8") // first it will give buffer method we have to change into utf-8 system
    console.log(info)
} catch (error) {
    console.error(error)
}

// Copy the file into the new file
try {
    await fs.copyFile("D://nodejsHuxn//text.txt", "D://nodejsHuxn//vishnu.txt")
} catch (error) {
    console.error(error)
}

// Add the text to the file
try {
    await fs.appendFile("D://nodejsHuxn//text.txt", "Vishnu oru Nalla payan")
} catch (error) {
    console.error(error)
}

// Get all the detail about that file
try {
    const detail = await fs.stat("D://nodejsHuxn//text.txt")
    console.log(detail)
} catch (error) {
    console.error(error)
}

// we can provide wihtout promises to the content will lokks like,
// fs.mkdir("D://newFile//callback",(error)=>{
//     console.log(error)
//     console.log("Directory created...")
// })

