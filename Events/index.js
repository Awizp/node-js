import EventEmitter from "events"

const customEmitter = new EventEmitter()
// It is the event system to execute the events in asynchronous way by using node js nothing else

// customEmitter.on("response", (name, age) => {
//     console.log(`user : ${name}, age : ${age}`)
// })
// We are giving a custom func with the name of the func and the parameters of it to execute the func every time

customEmitter.once("response", (name, age) => {
    console.log(`user : ${name}, age : ${age}`)
})
// It is the custom func only one time executes with arguements

customEmitter.emit("response", "Vishnu", 26) // with once method it will only execute
customEmitter.emit("response", "Gokul", 20)
customEmitter.emit("response", "Thamarai Kannan", 30)