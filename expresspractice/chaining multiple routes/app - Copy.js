const express=require('express')
const morgan=require('morgan');

const tourRouter=require('./routes/tourRoutes') //don't need json
const userRouter=require('./routes/userRoutes') //import userRouter

const app=express();
app.use(morgan('dev'))  //Tiny

app.use(express.json()); 


 app.use((req,res,next)=>{  //next is convention in express
     console.log('Hello from middleware');
     next(); //actually specify call function 
})

app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString();  //converted a nice readable string
    next();
})

app.use('/api/v1/tours',tourRouter)  //tourRouter run two middleware actually run two middleware run anyway
app.use('/api/v1/users',userRouter)

module.exports=app;