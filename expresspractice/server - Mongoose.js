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
    console.log('DB connection is Sucessful!'))  //connections properties
    
////////////////////////////////////////////////////////////////////////
//Mongoose is all about models and model like a blue print that reuse to create document
//So it bit like classes of javascript which is also like kind of blue print in order to create object out of them
//create a model in moongose in order to create document using it and also the query update and delete these document basically perform for each crud operation
// Mongoose schema is to describe our data, to set default values to validate the data, and all kinds of stuff like that
//start very simple schema for tours

const tourSchema=new mongoose.Schema({
    //Mongoose is actually a uses native javascript data types
    
    //name: String,
    //rating: Number,
    //price:Number
    name:{
        type: String,require: [true,'A tour must have a name'],
        unique:true
    },  //this object is schema type option
    rating:
    {
        type: Number,
        default: 4.5
    },
    price:{
        type: Number,
        require: [true,'A tour must have a price']
    } //validator to validate date
})

const Tour=mongoose.model('Tour',tourSchema)  //model name alwys use upperCase
const testTour=new Tour({  //test tour instance of model
    name: 'The park Camper',
    price: 997
    // rating: 4.7,
    // price: 497
});
testTour.save().then(doc=>{
    console.log(doc); //async await save in documents 
}).catch(err=>{
    console.log('ERROR !:',err)
})

////////////////////////////////////////////////////////////////
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