//Main application file
// const fs = require('fs')
//Param middleware is certain parameter
//the only parameter that will be might in our route url is the id

//Chaining multiple middleware

const express=require('express');  //import
const tourController=require('./../controllers/tourController')
// const {getAllTours,}=require('./../controllers/tourController')  this is destructuring 

//Before route
// const tours=JSON.parse( 
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
//     );

// const getAllTours=(req,res)=>{
//     console.log(req.requestTime);
//     res.status(200).json({
//         status:'sucess',
//         requestedAt: req.requestTime,
//         result: tours.length,
//         data: { 
//             tours
//         }                 
//     })
// }

// const getTour=  (req,res)=>{  
//     console.log(req.params) 
//     const id=req.params.id * 1;  
//     const tour=tours.find(el=> el.id === id) 
//         if(!tour){
//           return res.status(404).json({
//             status:'fail',
//         message:'Invalid id'
//     });
//     }
//     res.status(200).json({
//         status:'sucess',
//          data: { 
//              tour
//          }                 
//      })
// }

// const createTour= (req,res)=>{ 
// const newID=tours[tours.length-1].id;
// const newTour=Object.assign({id:newID},req.body)
// tours.push(newTour);
// fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
//     res.status(201).json({
//         status:'sucess',
//         data:{ 
//             tour:newTour
//         }
//     })
// }); 
// }

// const updateTour=(req,res)=>{
// if(req.params.id * 1 > tours.length)  // convert id into numbers
// {
//         return res.status(404).json({
//         status:'fail',
//          message:'Invalid id'
//     });
// }
// res.status(200).json({
//   status:'sucess',
//   data:{
//       tour:'<updated tour here!..............>'
//   }
// })
// }

// const deleteTour=(req,res)=>{ //route handler
// if(req.param.id * 1>tours.length) 
// {
//         return res.status(404).json({
//         status:'fail',
//          message:'Invalid id'
//     });
// }
// res.status(204).json({  //Means no content
//   status:'sucess',
// data: null 
// })
// }

const router=express.Router();   //tourRouter
// router.param('id',tourController.checkID)

////////////////////////////////////////////////////////////////////////////////////////////

//Create a checkBody middleware.
//Check if body contains name property and price property.
//If not, send back 400 (bad request).
//Add it to the post handler stack 

//,(req,res,next,val)=>{  //param function 4th argument is value of parameter
    //  console.log(`Tour id is ${val}`)  //val hold parameter
    //Middleware function only specify tour route
    //So this kind of local mini application 
    //this is analogy
   // next();
//})

router //Actually a real middleware  tourRouter
.route('/')    //.route('/api/v1/tours')
.get(tourController.getAllTours)
.post(tourController.checkBody,tourController.createTour) //chaining multiple middleware

router    //tourRouter
.route('/:id')  //.route('/api/v1/tours/:id')
.get(tourController.getTour)
.patch(tourController.updateTour)
.delete(tourController.deleteTour)

module.exports=router;