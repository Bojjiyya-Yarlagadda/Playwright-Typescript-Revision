//number -
let age:number =25
let price:number=98.90
let big:number=423422323

console.log("Age of the member:",age)
console.log(price)
console.log(big)


console.log(typeof age);

//string : 

let fname:string='Bojjiyya'
let lname:string="chowdary"
//let greeting:string=`hello` ,fname, name //it will give error but if you put the same in console.log then you wont face any error;
let greeting:string=`hello ${fname} ${lname}`;
console.log(greeting);


//boolean : 
let isStudent:boolean = true
let isLecturer:boolean =false 
let hasjob : boolean = true

console.log(`isStudent: ${isStudent} \nis student working or not :${hasjob}`);

//null/undefined
let emptyvalue:null =null ;
//emptyvalue=10;//error 

let notAssigned:undefined =undefined;
console.log(emptyvalue)
console.log(notAssigned)

let priced:number;
console.log(priced);//undefined


//any: 
let value:any = "abcd";
value =100;
console.log(value);
console.log(typeof value);
value = true ; 
console.log(value);
console.log(typeof value);

//union type :
let id : number | string | any ;
id =123;
id ="number";

//void : used for functions that do not return anything 

function add():void{
    console.log(10+20)
}

add()

