//Many promises run at the same time
//Asynchronous function return promise automatically
//Async function automatically return value
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

/////////////////////////////////////////////////////////////
//Unnecessary a waiting time
// const res=await superagent.get(`https://dog.ceo/api/breed/hound/images/random`)
// const res=await superagent.get(`https://dog.ceo/api/breed/hound/images/random`)//It is not a solution
const res1Pro=await superagent.get(`https://dog.ceo/api/breed/hound/images/random`)
const res2Pro=await superagent.get(`https://dog.ceo/api/breed/hound/images/random`)
const res3Pro=await superagent.get(`https://dog.ceo/api/breed/hound/images/random`)

const all=await Promise.all([res1Pro,res2Pro,res3Pro])
const imgs=all.map(el =>el.body.message)  // interation
// console.log(all)  //Actually start [Response]
console.log(imgs)

//get the result values

///////////////////////////////////////////////////////////////////
console.log(res.body.message)

await writeFilePro('dog-img1.txt',imgs.join('\n'))
console.log('Random dog image in api dog to save file')
    } catch(err){
    console.log(err)
    throw err;
    }
    return 'Ready 2!'
};

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