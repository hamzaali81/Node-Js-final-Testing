///////////////////////Event Loop in practice  
const fs=require('fs');
// setTimeout(()=>{console.log("Hello world "),10})  //First Timer
// setTimeout(()=>{console.log("Hello World 2"),20}) //Second Timer 

console.log("Hello 3")  //Top Level code

fs.readFile('.\NodeBehind\test-file.txt',()=>{   //last Code
    console.log("I/O finished");


    setTimeout(()=>console.log("Hello world "),10)  //First Timer
setTimeout(()=>console.log("Hello World 2"),3000)
setTimeout(()=>console.log("Hello world Test value 0"),0) //Second Timer 
})

console.log("Hello 4");   // Top level Code