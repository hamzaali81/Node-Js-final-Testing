//Arguments is an array in javascript and this array contain all the values that we pass inta a function So when i log this arguments an array
// console.log(arguments)
// console.log(require('module').wrapper);            //(.wrapper) is a property

////////////////////////////////////////////////////////////////////////////
////// Module.exports
// const C=require("./test-module-1")  //This is own module
// const calc1=new C();
// console.log(calc1.add(2,3));
//This is elegant way
/////////////////////////////////////

//exports
// const calc2=require('./test-module-2')

// console.log(calc2.add(4,7))
// console.log(calc2.multiply(6,8))

//Es6 Destructuring
const {add,multiply}=require('./test-module-2')

console.log(add(4,7))
console.log(multiply(6,8))

//////////Caching
//thismodule is loading only once
require('./test-module-3')();
