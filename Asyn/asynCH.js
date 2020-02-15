//How to consume promises and 
//Promise basically implement future value receive value sometimes in future
//nodemon install
//npm run start
//This pattern is callback hell
const fs=require('fs');
//npm install superagent
const superagent= require("superagent")
fs.readFile(`${__dirname}/test-file-asyn.txt`,(err,data)=>{
    console.log(`Breed: ${data}`)  //fetch data

    //Use get method in agent
    //superagent library specifically return promises
    superagent
    .get(`https://dog.ceo/api/breed/hound/images/random`)
    .then(res=>{ 
        if(err) return 
        // console.log(err.message)
    console.log(res.body.message)  //body means response

    fs.writeFile('dog-img.txt',res.body.message,err =>{
        console.log('Random dog image in api dog to save file');
    })

    }).catch(err=>{
        console.log(err.message)
    })  //error object

    // .end((err,res)=>{
        // if(err) return console.log(err.message)
        // console.log(res.body.message)  //body means response
    
        // fs.writeFile('dog-img.txt',res.body.message,err =>{
        //     console.log('Random dog image in api dog to save file');
        // })
       
    // })
})