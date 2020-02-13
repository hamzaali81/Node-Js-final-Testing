//Streams
// Used to process(read and write) data piece by piece (chunks)
//without completing the whole read or write operation therefore without keeping all data in memory

//1.Perfect for handling large volumes of data e.g VideoTrackList(youtube)
//Types of Streams
//Readable stream
//Write stream
//Duplex stream
//Transform stream


//Solution 1 
//In this case this solution is normally actually entire file have to load into memory because only that if after its ready only that 
//Now this problem file is big and ton of request application crash
//Because resources will very quickly run out of resources
//Work in small company . But production you cannot use this solution

const fs=require('fs');
const server =require('http').createServer();  //http object

server.on('request',(req,res)=>{
    //Solution 1 || loading File
    fs.readFile('test-file.txt','utf-8',(err,data)=>{
        res.end(data)
        if(err){console.log(err)}
    })
});

server.listen(3000,'127.0.0.1',()=>{
    console.log("Listeining..........")
})