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

        return res.status(404).json({status:'fail',message:'Invalid id'});
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

const port=3000;
app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})