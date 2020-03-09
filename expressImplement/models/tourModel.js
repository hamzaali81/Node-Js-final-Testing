const mongoose=require('mongoose');// Is a good practice everything related in main file

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
module.exports=Tour;