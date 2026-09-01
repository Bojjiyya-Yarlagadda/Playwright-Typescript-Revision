//Statements : 2 types 

/*
1.Conditional statements - -Decision Making
1.Conditional Statements : whenever we want to execute grp of statements based on certain conditions 

2.Looping Statements - Iterative statements
*/

//if condition : 
/* Syntax : if(condition){
                 | returns true /false
} */
               
  //eg1:
  let age :number =17;
  if(age>=18){
    console.log("Eligible for voting")
  }


//if else condition : 
/*  syntax : if(condition){
    statements of if block
 }
 else{
    statements of else block
 } */

 //eg2 :Print number is even or odd 
  let num:number=11;
  if(num%2==0)
  {
    console.log("given number is even number")
  }
  else
  {
    console.log(`${num} given number is an odd number`)
  }

//nested if ..else 
/* syntax : if(condition1){
statements satisfying conditions 1}

else if(condition2){
    statements satisfying conditions2
}
else{
    statements of remaining 
}
   */

//eg3: based on marks print the grade for the students

let marks:number =50
if(marks>=90 &&  marks<=100){
    console.log("student got grade'A'")
}
else if(marks>=70 && marks <90){
    console.log("Student got grade 'B'")
}
else if(marks>=50 && marks < 70){
    console.log("student got grade 'c' ")
}
else{
    console.log("Student is advised to take another test to get promoted to next level")
}

//Switch case statement :
 
/*
case ,break switch -keywords
expression -can be anything
expression returns value 1 then those respective statemets will be executed
why break command : if not used used it will go to each command and execute the statemet 
                    even though our condition might have met earlier.. 
                    therfore,if break is used if the condition is met then remaining statements wont get executed ...

switch(expression)
{
    case value 1  : statement 
                    break;
    case value 2  : statement
                    break;
    case value 3 : statement
                    break;
    default : statements 
 
}
         
Note : Expression       vs        Condition : 
           |                         |
    can be retun anything     Should always return true |false
(it can be number,string,boolean)  


*/  
//eg4 : Depending on the vlaue of the day, print the corresposnifn day of the week 
let day =10
switch(day)
{
    case 1 : console.log("Monday");
            break;
    case 2 : console.log("Tueday");
            break;
    case 3 : console.log("Wedday");
             break;
    case 4 : console.log("Thursday");
            break;
    case 5 : console.log("Friday");
             break;
    case 6 : console.log("Saturday");
              break;
    case 7 :console.log("Sunday");
              break;
    default : console.log("Invalid day input please emter day between 1 to 7")
}