let ab: number = 25;
let b: number = 40;
let c: number = 30;

if (ab > b && ab > c) {
    console.log(`${ab} is the largest`);
} else if (b > ab && b > c) {
    console.log(`${b} is the largest`);
} else {
    console.log(`${c} is the largest`);
}