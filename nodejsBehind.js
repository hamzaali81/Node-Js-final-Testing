///////////////////////Event Loop in practice  
const fs=require('fs');
setTimeout(()=>{console.log("Hello world "),10})  //First Timer
setTimeout(()=>{console.log("Hello World 2"),20}) //Second Timer

console.log("Hello 3")  //Top Level code

fs.readFile('.\NodeBehind\test-file.txt',()=>{   //
    console.log("I/O finished");
})

console.log("Hello 4");   // Top level Code