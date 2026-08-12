let x=10;
let studentName="john";



// in ts/js -- variables can be declared using 3 keywords : var | let | const
//	Keyword  Variable name : Datatype = value
//     |	     |                |
// eg : var     age          :number = value
console.log(x +" " +studentName);



//Differences between var,let,const :

function blockscope(){

   if(true){
    let msg ="hello";
    const greet ="Good Morning";

    console.log(msg)
    console.log(greet);

   }
}

blockscope();


function functionscope(){

    if(true){
        var msg = "Hello Variable";

        console.log(msg);
    }
    console.log(msg);
}

functionscope();


function scopeDiff(){

    if(true){

          var num1 =10;
          let num2=100;
          const num3=1000;

          console.log(num1);
          console.log(num2);
          console.log(num3);

    }
        console.log(num1);
       //   console.log(num2);  cannot access
        //  console.log(num3);  cannot access
}


//============Declaration/Value Assignment ===========================
 
  // Var can be declared without initialization 
   var a;
 console.log(a); //undefined

  //  Run -output : undefined
    
      a=30;
    console.log(a); //30

 //let - Let can be declared without initialisation
    let b ;
    console.log(b);
    b=10;
    console.log(b);
 //const -must be initialised at the time of declaration
   /* const z;
   console.log(z); */
   const c=500;
   console.log(c);
    

//3) Re-Declaration 
/*  var - allows the re-declaraation 
let,const -does not allows the re-declaration */

var city ="Tirupati";
var city ="vijauawada";

console.log(city) ;

//let,const :not allowed redeclaration 
let fruit="mango"
//let fruit="Banana";
console.log(fruit);

const number=50;
//const number=5000;
console.log(number)

//Compire time error 

//Note : In TS we do not redeclare the variable ,as it violates the typesafety 


//=====================Re-Assignment ===========================
//4) Re-intialisation /re-assignment : 

//var and let - re-assignment is allowed 
//const - re-assignment not allowed (only constants allowed - cannot change the value)

var ageing =25;
      ageing =30;

console.log(ageing);


let aged=50;
     aged=52;
console.log(aged);

    const ages=143;
    // ages=52;
console.log(ages);

//=========================Hoisting ==============================
  //var - hoisted with undefined , let and const (not intialised)
  console.log(abc); //undefined
  var abc=90;
  
  // console.log(abcd); //Block-scoped variable 'abcd' used before its declaration.VariablesKeywordsDemo.ts(135, 7): 'abcd' is declared here.
  let abcd=900;

 // console.log(abcde);//Block-scoped variable 'abcde' used before its declaration.VariablesKeywordsDemo.ts(138, 9): 'abcde' is declared here.
  const abcde=1000;