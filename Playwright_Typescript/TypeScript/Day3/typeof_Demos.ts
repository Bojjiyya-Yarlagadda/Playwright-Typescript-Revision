// ts - statically typed Prog. Language 


/* let age =40;
console.log(typeof age);

//Type 'string' is not assignable to type 'number'.
age ="ten";
console.log(age); */

let age:number =40;
console.log(age);
console.log(typeof age);

//Type 'string' is not assignable to type 'number'.
age ="ten";
console.log(age); //compile time error 

//we need to run using tsc command then we can have a issue here ,
// //if we run via tsx command the data is being updated 

//===========TYPESAFETY : in ts it is followed whenever we say the datatype of a variable =======
//No TYPESAFety scenario in ts
let result = "5" + 3;
console.log(result);

// TYPESAFety scenario in ts
let num1:string="88"
let num2:number=3;

let sum :any =num1 - num2;  //o/p: NaN,85
console.log(sum)