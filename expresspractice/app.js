//nodemon app.js
const express=require('express');  //calling
const app=express(); //bunch of method calling


//app.get('Root Url',callback function,)
//http method
app.get('/',(req,res)=>{
//Some data back ver quickly
// res.status(200).send('Hello from the Server side')
res.status(404).json({message:'Hello from the Server side',app:'natours'})  //send message
})
app.post('/',(req,res)=>{
    res.send('You can post to this end point')
})

const port=3000;
app.listen(port,()=>{
    console.log(`App Running on port ${port}......`);
});