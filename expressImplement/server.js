// Is a good practice everything related in main file
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

const app=require('./app') //not related express but everything related this thing
// const dotenv=require('dotenv')  //undefined
//like database configuration,error handling,handling stuff or environment variable
//kind of entry point
///////////////////////////////////////////

// dotenv.config({path:'./config.env'})
//  console.log(app.get('env'))  //environment variable
console.log(process.env); //bunch of different variable
//Environment variable 
//const port=3000;  //port should be comment from env variable
const port=process.env.PORT || 3000; 
app.listen(port,()=>{
//gigantic list

    console.log(`App running on port ${port}`)
}) 

//In express many spe variable Node N whether in development or production
//Set environment variable to pre plan
//NODE_ENV=development nodemon server.js
//NODE_ENV=development x=23 nodemon server.js
// one variable reach to activate database

//npm install dotenv