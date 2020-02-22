const express=require('express')
// const fs = require('fs')
const morgan=require('morgan');
const tourRouter=require('./routes/tourRoutes') //don't need json
const userRouter=require('./routes/userRoutes') //import userRouter

const app=express();
////////////////////////////////////////////////////////
//Midlleware global 
app.use(morgan('dev'))  //Tiny
//1) Middlewares
app.use(express.json()); //use middleware actually (use) is middleware

//////////////////////////////////
//own middleware
 app.use((req,res,next)=>{  //next is convention in express
     console.log('Hello from middleware');
     next(); //actually specify call function 
//Midlleware not implement
})

app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString();  //converted a nice readable string
    next();
})

////////////////////////////////////////////////////////
//    const tours=JSON.parse( fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
    
   //2) Route handlers
//     const getAllTours=(req,res)=>{
//         console.log(req.requestTime);
//         res.status(200).json({
//             status:'sucess',
//             requestedAt: req.requestTime,
//             result: tours.length,
//             data: { 
//                 tours
//             }                 
//         })
//     }
  
// const getTour=  (req,res)=>{  
//         console.log(req.params) 
//         const id=req.params.id * 1;  
//         const tour=tours.find(el=> el.id === id) 
//             if(!tour){
//               return res.status(404).json({
//                 status:'fail',
//             message:'Invalid id'
//         });
//         }
//         res.status(200).json({
//             status:'sucess',
//              data: { 
//                  tour
//              }                 
//          })
//     }

//  const createTour= (req,res)=>{ 
//     const newID=tours[tours.length-1].id;
//     const newTour=Object.assign({id:newID},req.body)
//     tours.push(newTour);
//     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
//         res.status(201).json({
//             status:'sucess',
//             data:{ 
//                 tour:newTour
//             }
//         })
//     }); 
// }

// const updateTour=(req,res)=>{
//     if(req.params.id * 1 > tours.length)  // convert id into numbers
//     {
//             return res.status(404).json({
//             status:'fail',
//              message:'Invalid id'
//         });
//     }
// res.status(200).json({
//       status:'sucess',
//       data:{
//           tour:'<updated tour here!..............>'
//       }
//   })
// }

// const deleteTour=(req,res)=>{ //route handler
//     if(req.param.id * 1>tours.length) 
//     {
//             return res.status(404).json({
//             status:'fail',
//              message:'Invalid id'
//         });
//     }
// res.status(204).json({  //Means no content
//       status:'sucess',
//     data: null 
//   })
// }
///////////////////////////////////////////////////////////////////////////
//User route
// const getAllUsers=(req,res)=>{
//     res.status(500).json({
//         status:'error',
//         message:'This roue is not yet define!'
//     })  //General server userI
// }
// const getUser=(req,res)=>{
//     res.status(500).json({
//         status:'error',
//         message:'This roue is not yet define!'
//     })  //General server userI
// }
// const createUser=(req,res)=>{
//     res.status(500).json({
//         status:'error',
//         message:'This roue is not yet define!'
//     })  //General server userI
// }
// const updateUser=(req,res)=>{
//     res.status(500).json({
//         status:'error',
//         message:'This roue is not yet define!'
//     })  //General server userI
// }
// const deleteUser=(req,res)=>{
//     res.status(500).json({
//         status:'error',
//         message:'This roue is not yet define!'
//     })  //General server userI
// }
/////////////////////////////////////////////////////


//3)Routes
//this route is parent route
// app.use('/api/v1/tours',tourRouter)  //tourRouter run two middleware actually run two middleware run anyway
// app.use('/api/v1/users',userRouter)

//There are two routes use in creating and mounting multiple routes
// const tourRouter=express.Router(); //All routes wra in one route
// const userRouter=express.Router();
//once at this router run any way
//route at this url

//use route in this two route  
//Two route connects application
// tourRouter //Actually a real middleware
// .route('/')    //.route('/api/v1/tours')
// .get(getAllTours)
// .post(createTour)


// tourRouter
// .route('/:id')  //.route('/api/v1/tours/:id')
// .get(getTour)
// .patch(updateTour)
// .delete(deleteTour)


// userRouter
// .route('/') //.route('/api/v1/users')
// .get(getAllUsers)
// .post(createUser)

// userRouter
// .route('/:id')  //.route('/api/v1/users/:id')
// .get(getUser)
// .patch(updateUser)
// .delete(deleteUser)


app.use('/api/v1/tours',tourRouter)  //tourRouter run two middleware actually run two middleware run anyway
app.use('/api/v1/users',userRouter)
//4)START Server
// const port=3000;
// app.listen(port,()=>{
//     console.log(`App running on port ${port}`)
// })
module.exports=app;