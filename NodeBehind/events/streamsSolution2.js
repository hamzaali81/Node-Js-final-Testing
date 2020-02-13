//////Stream Solution 2
const fs=require('fs');
const server =require('http').createServer();  //http object

server.on('request',(req,res)=>{
const readable=fs.createReadStream('test-file.txt');
readable.on('data',chunk=>{
    res.write(chunk);  //write method every single piece of data into that stream
})
res.end

});

server.listen(3000,'127.0.0.1',()=>{
    console.log("Listeining..........")
})