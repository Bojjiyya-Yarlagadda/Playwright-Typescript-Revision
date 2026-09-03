// Program to calculate the sum of the first 10 natural numbers using while loop

let res: number = 0;
let n: number = 1;

while (n <= 10) {
    res += n;
    n++;
}

console.log("Sum of first 10 natural numbers:", res);