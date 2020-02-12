///////////////////////Event Loop in practice  
const fs=require('fs');
const crypto=require('crypto')
const start=Date.now();  //current date
process.env.UV_THREADPOOL_SIZE = 2; //Stands for libUV
// setTimeout(()=>{console.log("Hello world "),10})  //First Timer
// setTimeout(()=>{console.log("Hello World 2"),20}) //Second Timer 

console.log("Hello 3")  //Top Level code

fs.readFile('.\NodeBehind\test-file.txt',()=>{   //last Code
    console.log("I/O finished");
    console.log("------------------------------------------------")

    //Actually comming out of the evet loop  
    setTimeout(()=>console.log("Hello world "),0)  //First Timer
setTimeout(()=>console.log("Hello World 2"),3000)
setTimeout(()=>console.log("Hello world Test value 0")) //Second Timer 


process.nextTick(()=>console.log("My Process"))

// crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
//     console.log(Date.now()-start,"Password Encryption")  //code Date run in time miliseconds
// })

// crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
//     console.log(Date.now()-start,"Password Encryption")  //code Date run in time miliseconds
// })
// crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
//     console.log(Date.now()-start,"Password Encryption")  //code Date run in time miliseconds
// })
// crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
//     console.log(Date.now()-start,"Password Encryption")  //code Date run in time miliseconds
// })
// crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
//     console.log(Date.now()-start,"Password Encryption")  //code Date run in time miliseconds
// })
// crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
//     console.log(Date.now()-start,"Password Encryption")  //code Date run in time miliseconds
// })
// crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
//     console.log(Date.now()-start,"Password Encryption")  //code Date run in time miliseconds
// })
crypto.pbkdf2Sync("password","salt",100000,1024,"sha512")
         console.log(Date.now()-start,"Password Encryption") 

         crypto.pbkdf2Sync("password","salt",100000,1024,"sha512")
         console.log(Date.now()-start,"Password Encryption") 

         crypto.pbkdf2Sync("password","salt",100000,1024,"sha512")
         console.log(Date.now()-start,"Password Encryption") 

         crypto.pbkdf2Sync("password","salt",100000,1024,"sha512")
         console.log(Date.now()-start,"Password Encryption") 

})

console.log("Hello 4");   // Top level Code