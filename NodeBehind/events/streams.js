//Streams
// Used to process(read and write) data piece by piece (chunks)
//without completing the whole read or write operation therefore without keeping all data in memory

//1.Perfect for handling large volumes of data e.g VideoTrackList(youtube)
//Types of Streams
//Readable stream
//Write stream
//Duplex stream
//Transform stream


const fs=require('fs');
const server =require('http').createServer();  //http object

server.on('request',(req,res)=>{
    //Solution 1
    fs.readFile('test-file.txt','utf-8',(err,data)=>{
        res.end(data)
        if(err){console.log(err)}
    })
});

server.listen(3000,'127.0.0.1',()=>{
    console.log("Listeining..........")
})