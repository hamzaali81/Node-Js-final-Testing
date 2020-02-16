const express=require('express')
const fs = require('fs')
const app=express();
//Parse  string data convert in object
//file base api

///////////////////////////////////////////////////////////////////////
//Middleware
app.use(express.json());  //express.json is a middleware
//middleware is basically a function that can modify the incoming request data
//called middleware (middle b/w request and response)



//We don't inside the route handler
//Because the top level code which un execute after
//Only callback function inside the loop. We cannot have any blocking code but outside their is no problem
const tours=JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
    );

    app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status:'sucess',
        result: tours.length,
        data: { 
            tours //ES6 feature key and value noy same
        }                     //data propperty
    })
//Route handler
});

app.post('/api/v1/tours',(req,res)=>{
     //Send data to the client ideally available on the request
     //Express doesnot put body data on the request and in order data is avilable we have to use 
     //use some middleware

    console.log(req.body)  //body is the property that is avilable to be req.body because we use that middleware
     res.send('Done') //Some place holder
})

const port=3000;
app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})