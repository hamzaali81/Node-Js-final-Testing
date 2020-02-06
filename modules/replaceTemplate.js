
module.exports 
// const replaceTemplate
=(temp,product)=>{
    let output =temp.replace(/{%PRODUCTNAME%}/g,product.productName) //not use quote use regular exprssion
        output=output.replace(/{%IMAGE%}/g ,product.image) //not a good practice directly manipulate
        output=output.replace(/{%PRICE%}/g ,product.price)
        output=output.replace(/{%FROM%}/g ,product.from)
        output=output.replace(/{%NUTRIENTS%}/g ,product.nutrients)
        output=output.replace(/{%QUANTITY%}/g ,product.quantity)
        output=output.replace(/{%DESCRIPTION%}/g ,product.description)
        output=output.replace(/{%ID%}/g ,product.id)

         
if(!product.organic)  output=output.replace(/{%NOT_ORGANIC%}/g ,'not-organic') //not-organic class name
return output;
}