//////////////////////////Consuming promises with asyn/await
///asynchrnous javascript feature
//So promises has made our code alot of better
//Consuming promises, with the then method which still makes us use all these callback function
//There is a new feature of javascript ES8 will make our code alot of easier
//await keyword in front of our promise.
//This piece of our code synthetic sugar of our code
const fs=require('fs');
const superagent= require("superagent")

const readFilePro= file=>{
    return new Promise((reject,resolve)=>{   //Both are available in executor function
        fs.readFile('testing.js',(err,data)=>{
           if(err) reject('I could not find error')
            resolve(data);  //return the value
        })
    })
}
const writeFilePro=(file,data)=>{
return new Promise ((resolve,reject)=>{
        fs.writeFile(file,data,err=>{
            if(err) reject('Could not write a file!')
            resolve('sucess')
        })
    })
}

const getDogPic= async() =>{ //Other rest of code in event loop
    try{
const data=await readFilePro(`${__dirname}/dog.txt`)
console.log(`Breed ${data}`)

const res=await superagent.get(`https://dog.ceo/api/breed/hound/images/random`)
console.log(res.body.message)

await writeFilePro('dog-img1.txt',res.body.message)
console.log('Random dog image in api dog to save file')
    } catch(err){
    console.log(err)
    }
}
getDogPic();