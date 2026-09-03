// Program to calculate the factorial of a given number using while loop

let res1: number = 1;
let n1: number = 10;

while (n1 >= 1) {
    res1 = res1 * n1;
    n1 -= 1;
}

console.log(`Factorial is: ${res1}`);