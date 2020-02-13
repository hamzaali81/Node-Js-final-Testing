const EventEmitter=require('events');  //Standard Module
const http=require('http')
//Instance Module
// const myEmitter=new EventEmitter();
class Sales extends EventEmitter{
    constructor(){
      super()
    }
}           //Es6 Syntax or es2015
const myEmitter=new Sales();

myEmitter.on("newWork",()=>{console.log("First Pattern")})  //observer pattern
myEmitter.on("newWork",()=>{console.log("Receipe 2")})
myEmitter.on("newWork",store=>{console.log(`There are ${store} item to store.`)})

myEmitter.emit("newWork",10)

////////////////////////////////////////////////////////////////////////////////

const server = http.createServer();

//server.on(listening object)
server.on("request",(req,res)=>{console.log("Request Received");
console.log(req.url) 
res.end("Request Send for server")})

server.listen(3000,'127.0.0.1',()=>{console.log("Hello Request")})