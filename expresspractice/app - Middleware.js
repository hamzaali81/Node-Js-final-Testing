const express=require('express')
const fs = require('fs')

const app=express();
app.use(express.json()); //use middleware actually (use) is middleware
////////////////////////////////////////////////////////
//Midlleware global 
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
   const tours=JSON.parse( fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
    
    const getAllTours=(req,res)=>{
        console.log(req.requestTime);
        res.status(200).json({
            status:'sucess',
            requestedAt: req.requestTime,
            result: tours.length,
            data: { 
                tours
            }                 
        })
    }
  
const getTour=  (req,res)=>{  
        console.log(req.params) 
        const id=req.params.id * 1;  
        const tour=tours.find(el=> el.id === id) 
            if(!tour){
              return res.status(404).json({
                status:'fail',
            message:'Invalid id'
        });
        }
        res.status(200).json({
            status:'sucess',
             data: { 
                 tour
             }                 
         })
    }

 const createTour= (req,res)=>{ 
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
    }); 
}

const updateTour=(req,res)=>{
    if(req.params.id * 1 > tours.length)  // convert id into numbers
    {
            return res.status(404).json({
            status:'fail',
             message:'Invalid id'
        });
    }
res.status(200).json({
      status:'sucess',
      data:{
          tour:'<updated tour here!..............>'
      }
  })
}

const deleteTour=(req,res)=>{ //route handler
    if(req.param.id * 1>tours.length) 
    {
            return res.status(404).json({
            status:'fail',
             message:'Invalid id'
        });
    }
res.status(204).json({  //Means no content
      status:'sucess',
    data: null 
  })
}

// app.get('/api/v1/tours', getAllTours); //Get function directly
//app.post('/api/v1/tours',createTour)
// app.get('/api/v1/tours/:id',getTour);
// app.patch('/api/v1/tours/:id',updateTour)
// app.delete('/api/v1/tours/:id',deleteTour)

app
.route('/api/v1/tours')
.get(getAllTours)
.post(createTour)
////////////////////////////////////////////////////////////////////////////
//code more modify
//The two route handlers reuse
////////////////////////////////////
// app.use((req,res,next)=>{  //next is convention in express
//     console.log('Hello from middleware');
//     next(); //actually specify call function 

// }) //Middleware apply after route handler 
///////////////////////////////////////////////////////////////////////////

app
.route('/api/v1/tours/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour)

const port=3000;
app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})