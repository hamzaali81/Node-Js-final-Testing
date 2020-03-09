const mongoose=require('mongoose');                           // Is a good practice everything related in main file
const dotenv=require('dotenv');
const app=require('./app'); //not related express but everything related this thing

dotenv.config({path:'./config.env'});

// const dotenv=require('dotenv')  //undefined
//like database configuration,error handling,handling stuff or environment variable
//kind of entry point
///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Mongoose implement

const DB=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);
//mongoose.connect(connection string,object with some option);
  mongoose
  .connect(DB,{    //hosted database version
//  mongoose.connect(process.env.DATABASE_LOCAL,{

    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
 })
//  .then(con=>{   //handle promise
//     console.log("DB connection is sucessful!")
//     //  console.log(con.connections)  //connections properties
// })
.then(()=>
    console.log('DB connection is Sucessful!'));
//})                 

/////////////////////////////////////////////////////////////////////////////////
// dotenv.config({path:'./config.env'})
//  console.log(app.get('env'))  //environment variable

// console.log(process.env); //bunch of different variable

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
//npm i prettier eslint-config-prettier eslint