//Shortcuts
//ctrl+c= exit
// ctrl+d= changes at a time



const fs = require('fs'); //return an object alots of function
const http = require('http'); //this module networking capabilities building http server
const url = require('url');
const replaceTemplate=require('./modules/replaceTemplate')
const slugify=require('slugify')
////////////////////////////////////////////
//////FILES
//Blocking Synchronous way
// const textIn=fs.readFileSync('test.txt','utf-8')
// console.log(textIn);

// const a='hello';
// console.log(a)

//
// const textout=`Hello world testing ${textIn} and Date is ${Date.now()}`
// fs.writeFileSync('output.txt',textout)
// console.log('File written')

//Non-Blocking Asynchronous way
// fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{ //data= actual data
//     // console.log(data); //NodeJs completetly design callbacks
//     if(err)
//         return console.log('Erorr Again upload')
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2)
//         fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
//      console.log(data3);
//      fs.writeFile('./txt/final.txt',`${data2}\n ${data3}`,'utf-8',err=>{

//         console.log('Your file has been write')
//      })
//     })
// })
// })
//  






///////////////////////////////////////////////////////////
/////////////////////SERVER//////////////////

//listen http request
//1.Method that is an on object
//  const server=http.createServer((req,res)=>{ //request like 
//      res.end("Your request is accepted"); //Sending back and simplest request send
//  })
//  //server.listen(port number,local host explicitly (standard ip address ),call back function actually start server)
//  //current program connected
//  server.listen(8000,'127.0.0.1',()=>{
//      console.log("Hello request!")
//  
//This something called event loop
//})

//Real time create first Server
// const server=http.createServer((req,res)=>{
//      console.log(req); //request send from server
//     res.end("Hello request from the server.........!") //listening incoming request from server
// })
// server.listen(8000,'127.0.0.1',()=>{
//     console.log("Hello request!")
// })

/////////////////////////////////////////////////////////////////////
////////////////ROUTING/////////////////////////

//1.Routing basically means implementing different actions for diiferent urls.
//2.Routing can be complicated big applications but tool manage like express.
//Step#1: Analyze url
//1.More complex like specifying id e.g /product/id=23?
//2.Status code write multiple way e.g writeHead like 404  


// const server=http.createServer((req,res)=>{
//     console.log(req.url)
//     res.end("Hello Request")
// })
// server.listen(8000,'127.0.0.1',()=>{
//     console.log("Send Request from server............!")
// })

//Specifying url
// Synchronized version to execute top level code at once. Write in the beginning 

// const replaceTemplate=(temp,product)=>{
//     let output =temp.replace(/{%PRODUCTNAME%}/g,product.productName) //not use quote use regular exprssion
//         output=output.replace(/{%IMAGE%}/g ,product.image) //not a good practice directly manipulate
//         output=output.replace(/{%PRICE%}/g ,product.price)
//         output=output.replace(/{%FROM%}/g ,product.from)
//         output=output.replace(/{%NUTRIENTS%}/g ,product.nutrients)
//         output=output.replace(/{%QUANTITY%}/g ,product.quantity)
//         output=output.replace(/{%DESCRIPTION%}/g ,product.description)
//         output=output.replace(/{%ID%}/g ,product.id)
            
    // if(!product.organic)  output=output.replace(/{%NOT_ORGANIC%}/g ,'not-organic') //not-organic class name
    //  return output;
// }

const tempOverview=fs.readFileSync(`${__dirname}/templates/template-overview.htm`,'utf-8');
const tempCard=fs.readFileSync(`${__dirname}/templates/template-card.htm`,'utf-8');
const tempProduct=fs.readFileSync(`${__dirname}/templates/template-product.htm`,'utf-8');




const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8'); //Top level code 
    // console.log(productdata)
    const dataObj=JSON.parse(data) //array obj
   
   
   ////////////////////////////////////////////
   /////////////////////////////including third party module
    console.log(slugify('Fresh Avocados',{lower:true}))
    const slugs=dataObj.map(el=> slugify(el.productName,{lower:true}))
    console.log(slugs);
    ////////////////////////////////////////////////////////

const server = http.createServer((req, res) => {
    // res.end("Hello request")

    //Overview
    // console.log(req.url)
    const {query,pathname}=url.parse(req.url,true)
    // console.log(url.parse(req.url,true)) //actually parse query into an object
    // const pathname = req.url;
    




    if (pathname === '/' || pathname === '/overview') {
        //Actually load template overview each tim their is a new request for this route to adjust 
        
          res.writeHead(200,{'Content-type':'text/html',})
         const cardsHtml= dataObj.map(el=>replaceTemplate(tempCard,el)).join('')  //that is something new array ==>map return callback function
        //  console.log(cardsHtml);
        const output= tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml)
        
        res.end(output);
        
        // res.end("This is the overview")
    }
     //Product
     //Dynamic coming from json file


    else if (pathname === '/product') {
         res.writeHead(200,{'Content-type':'text/html',})
        const product=dataObj[query.id] //position coming the query id
        const output = replaceTemplate(tempProduct,product)
        res.end(output)
        // console.log(query);
        res.end("This is the product")
    }
    //Api
    else if(pathname==='/api'){
    // fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8')
    //,(err,data)=>{
    // console.log(productdata)
    const productData=JSON.parse(data)
        res.writeHead(200,{'Content-type':'application/json',});
    //  const productdata=JSON.parse(data)
    res.end(data)
    // }) //variable always translate script
 // res.end("API")
    }

    //Not found
    else{
        //404 page not found
        //200 ok request send
        res.writeHead(404,{
                        //Actually specify object
                        //http header actually piece of information about response
                        //Many Standard headers to inform browser some information
                        'Content-type': 'text/html',  //implementing some html
                        'my-own-header': 'hello'  //Some metadata
        }) //also send headers
        res.end("<h1>Page Not found!<h1>"); //That is something http status code
    }
})


server.listen(8000, '127.0.0.1', () => {
    console.log("Send Request ...........!")
})









