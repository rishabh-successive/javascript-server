

k = 0;
let s=" ";
let flag = 1;
// rows=4;
rows = parseInt(process.argv[2]);
// console.log(rows);
for(i=1;i<=2*rows-1;i++){
if(i<rows-k)
process.stdout.write(" ");
else{
if(flag)
process.stdout.write("*");
else
process.stdout.write(" ");
flag=1-flag;
}
if(i==rows+k)
{
k++;
console.log("\n");
if(i==2*rows-1)
break;
i=0;
flag = 1;
}
}

