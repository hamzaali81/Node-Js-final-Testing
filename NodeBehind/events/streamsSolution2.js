//////Stream Solution 2
const fs=require('fs');
const server =require('http').createServer();  //http object

server.on('request',(req,res)=>{
const readable=fs.createReadStream('testt-file.txt');  //testtt ===error file
readable.on('data',chunk=>{
    res.write(chunk);  //write method every single piece of data into that stream
})
readable.on('end',()=>{
    res.end();  //response is also a stream and end method signals that no more data will be written 
})
readable.on('error',err=>{
    console.log(err);
    res.statusCode=500;                  //res.status(500) //This is express  //500 server error
                     //404 page not found error
    res.end('file not found!')
})
});

server.listen(3000,'127.0.0.1',()=>{
    console.log("Listeining..........")
})

//This Approach is problem is readable stream so the one that we are using to read
//the file from the disk is much faster than actually sending the the result with response writeable stream over the network.And this is overwhelm the response
//stream which cannot handle all this incoming data so fast and this problem is so called backpressure.
//and its real problem in real situation so in this case backpressurehappens when the response 
//cannot send data nearly as fast as it receiving it from the file