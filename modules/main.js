let greet = module.require("./greet")
let { name1, name2, name3 } = module.require("./people")

greet(name1)
greet(name2)
greet(name3)