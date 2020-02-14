const fs=require('fs');
const server =require('http').createServer();  //http object

//Pipe operator is available for all readable streams and its allows us to pipe the output of a readable stream
//Right into input to writeable stream 
//Basically fix the problem of backpressure about
//handle the speed basically of the data coming in and the speed data going out 


//This stream is here duplex
//pipe method fix backpressure problem automatically solve
//pipe method easiest way of consuming and writting streams
server.on('request',(req,res)=>{
const readable=fs.createReadStream("test-file.txt")
//readableSource.pipe(writeDestination)
readable.pipe(res);
})

server.listen(3000,'127.0.0.1',()=>{
    console.log("Listeining..........")
})