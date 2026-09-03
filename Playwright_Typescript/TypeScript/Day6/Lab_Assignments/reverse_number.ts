let nu: number = 12345;
let reverse: number = 0;

while (nu > 0) {
    let digit: number = nu % 10;
    reverse = reverse * 10 + digit;
    nu = Math.floor(nu / 10);
}

console.log(reverse);

//m-2 : 
/* let n: number = 12345;

let reverse: number = Number(n.toString().split('').reverse().join(''));

console.log(reverse); */

//m-3: 
/* let n: number = 12345;
let str: string = n.toString();
let reverse: string = "";
let i: number = str.length - 1;

while (i >= 0) {
    reverse += str[i];
    i--;
}

console.log(Number(reverse)); */