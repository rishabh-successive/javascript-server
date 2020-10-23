function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);      
}
let x = process.argv[2];
console.log(factorial(x));
let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);

let sum = num1 + num2;
console.log("Sum is : " ,sum );
