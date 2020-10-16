let num1 = process.argv[2];
let num2 = process.argv[3];
let num3 = process.argv[4];
let largest;

if(num1 >= num2 && num1 >= num3) {
largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
largest = num2;
}
else {
largest = num3;
}

console.log("The largest number is " + largest);