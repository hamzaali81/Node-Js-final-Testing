const express=require('express')
const fs = require('fs')
const app=express();

app.use(express.json());  

const tours=JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
    );

    app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status:'sucess',
        result: tours.length,
        data: { 
            tours
        }                 
    })
});
////////////////////////////////////////////////////////////////////////////////
app.get('/api/v1/tours/:id',(req,res)=>{  //add that variable (:id define) (? optional parameter )
    console.log(req.params) //parameter automatically assign value
    const id=req.params.id * 1;  //js trick convert string into a number
    const tour=tours.find(el=> el.id === id)  //Use in arrays  //It is basically loop to the array

    //id and tour sequence follow if there is error


    // if(id>tours.length){
        if(!tour){

        return res.status(404).json({
            status:'fail',
        message:'Invalid id'
    });
    }

    // const tour=tours.find(el=> el.id === id)  //Use in arrays  //It is basically loop to the array
    //and in each of the iteration
    
    
    res.status(200).json({
        status:'sucess',
        //  result: tours.length,
         data: { 
             tour
         }                 
     })
});

///////////////////////////////////////////////////////////////////////////////////////////
//api
app.post('/api/v1/tours',(req,res)=>{
    // console.log(req.body) 
    const newID=tours[tours.length-1].id;
    const newTour=Object.assign({id:newID},req.body)
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({
            status:'sucess',
            data:{ 
                tour:newTour
            }
        })
    })
    //  res.send('Done') 
})
////////////////////////////////////////////
// We received the entire new updated object and with patch we put only the expected values
//object will updated
//patch simply properties update
// app.patch('/api/v1/tours/:id',(req,res)=>{
//     if(req.param.id * 1>tours.length) 
//     {
//             return res.status(404).json({
//             status:'fail',
//              message:'Invalid id'
//         });
//     }
// //patch requst actually mean updat data
// //dif verbs like status code and send back
// res.status(200).json({
//       status:'sucess',
//       data:{
//           tour:'<updated tour here!..............>'
//       }
//   })
// })

// ///////////////////////////////////////////////////////////////////////////////////////////////
//We are dealing with files which is real world scenerio use handle_error
//Delete Request
app.delete('/api/v1/tours/:id',(req,res)=>{
    if(req.param.id * 1>tours.length) 
    {
            return res.status(404).json({
            status:'fail',
             message:'Invalid id'
        });
    }
//patch requst actually mean updat data
//dif verbs like status code and send back
res.status(204).json({  //Means no content
      status:'sucess',
    //   data:{
    //       tour:'<updated tour here!..............>'
    //   }
    data: null
  })
})











const port=3000;
app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})