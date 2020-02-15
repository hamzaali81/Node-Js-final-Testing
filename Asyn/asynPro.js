//Flat structure of chain promise
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
        fs.write(file,data,err=>{
            if(err) reject('Could not write a file!')
            resolve('sucess')
        })
    })
}


readFilePro(`${__dirname}/dog.txt`)
.then(data=>{
    console.log(`Breed: ${data}`)  
    return superagent
    .get(`https://dog.ceo/api/breed/hound/images/random`)
})

.then(res=>{ //return then
        console.log(res.body.message)   //return promise
        return writeFile('dog-img.txt',res.body.message);
    //  fs.writeFile('dog-img.txt',res.body.message,err =>{
    //     if (err) return console.log(err.message)
    //     console.log('Random dog image in api dog to save file');
    // })

    })
    .catch(err=>{  //catch handler
        console.log(err.message)
    })  
