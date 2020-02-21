// Is a good practice everything related in main file
const app=require('./app') //not related express but everything related this thing
//like database configuration,error handling,handling stuff or environment variable
//kind of entry point
const port=3000;
app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})