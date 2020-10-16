k = 0;
let s=" ";
let flag = 1;
// rows=4;
rows = parseInt(process.argv[2]);
// console.log(rows);
for(i=0;i<=rows;i++)
{

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