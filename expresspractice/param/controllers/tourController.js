//Handler function that only be used in id. 
//check if id is valid 
//Repeat code is not a good practice
const fs = require('fs');
const tours=JSON.parse( 
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
    );

    exports.checkID=(req,res, next,val)=>{
        console.log(`Tour id is ${val}`) 
        if(req.param.id * 1>tours.length) 
{
        return res.status(404).json({
        status:'fail',
         message:'Invalid id'
    });
}
next();
    }


exports.getAllTours=(req,res)=>{
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

exports.getTour=  (req,res)=>{  
    console.log(req.params) 
    const id=req.params.id * 1;  

    const tour=tours.find(el=> el.id === id) 
    //if(id>tours.length)
    //     if(!tour){
    //       return res.status(404).json({
    //         status:'fail',
    //     message:'Invalid id'
    // });
    // }
    res.status(200).json({
        status:'sucess',
         data: { 
             tour
         }                 
     })
}

exports.createTour= (req,res)=>{ 
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

exports.updateTour=(req,res)=>{
// if(req.params.id * 1 > tours.length)  // convert id into numbers
// {
//         return res.status(404).json({
//         status:'fail',
//          message:'Invalid id'
//     });
// }
res.status(200).json({
  status:'sucess',
  data:{
      tour:'<updated tour here!..............>'
  }
})
}

exports.deleteTour=(req,res)=>{ //route handler
res.status(204).json({  //Means no content
  status:'sucess',
data: null 
})
}
