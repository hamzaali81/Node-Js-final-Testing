//Asynchronous function return promise automatically
//Async function automatically return value
const fs=require('fs');
const superagent= require("superagent")

const readFilePro= file=>{
    return new Promise((reject,resolve)=>{   //Both are available in executor function
        fs.readFile('testing.txt',(err,data)=>{
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
    throw err;
    }
    return 'Ready 2!'
};
// console.log('Will get dog pics!') //asyn function actually run in the background

// // const x=getDogPic(); //js this line of code just offload


// getDogPic().then(x=>{   //getDogPic return promise then method access future value
//     console.log(x)
//     console.log('Getting Done!')
// }).catch(err=>{
//     // console.log(err)
//     console.log("Error!")

// }) 
// console.log(x)
// console.log('Getting Done!')
//If rejected throwing an error



/////////////////////////////////////
//Another pattern
//IIFE(Immediately invoked function)
//You don't have decleare whole function
(async()=>{
try{
console.log('1.Get Dog pics')
const x=await getDogPic();
console.log(x)
console.log('3. Will be done!')
}
catch(err){
console.log('Error!!!!!')
}


}) ();