import path from "path"

//base name
console.log(path.basename("c://nodejs//new//main.js"))
//base name without extension name
console.log(path.basename("c:/nodejs/new/main.js", ".js"))
//dir name
console.log(path.dirname("c:/nodejs/new/main.js"))
//extension name
console.log(path.extname("c://nodejs/new/main.js"))

//join the folder name
console.log(path.join("c:", "nodejs", "main", "main.js"))

//join the foldre up the level
console.log(path.join("c:", "nodejs", "main", "new", "main.js", ".."))
console.log(path.join("c:", "nodejs", "main", "new", "main.js", "..", ".."))

//normalize the path folders directory
console.log(path.normalize("c://nodejs//main//new//main.js"))
