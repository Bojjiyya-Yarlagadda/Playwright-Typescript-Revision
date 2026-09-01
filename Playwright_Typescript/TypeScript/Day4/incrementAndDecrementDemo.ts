//Increment : ++ 
//Decrement : --

let x:number =10;
x=x+1;
console.log(x);

/* console.log("Before post increment " ,x);
x++;//post incremnt - specify the variable and then do increment 
console.log(x);
console.log("before pre increment"+ x);

++x;
console.log(x); */


//individualy increment we might not see any difference but when we assign the values to other variable then we can spot the difference easily 
//pre increment means : first increment happens and then assignment/other action happens 
//post increment means : first operation/action happens and then increment happens...


console.log(x);
console.log("before post increment"+ x);
let post:number=x++;
console.log("AfterPost increment variable value:",post);
console.log("After  post increment x value"+ x);

console.log(x);
console.log("before pre increment"+ x);
let pre:number=++x;
console.log("pre increment variable value ",pre);
console.log("pre increment after  x value"+ x);

