//let norow = process.argv[2]
let norow : number; 
let i:number,j:number,k:number,l:number,str:string;
export default function diamond(norow) {
    console.log("Print a diamond with rows ", norow);
    //let norow;
    if (norow <= 10 && norow >= 2) {
    for (let i = 0; i <= norow; i++) {
    let str = "";
    for (let j = norow; j > i; j--) {
    str += " ";
    }
    for (let k = 1; k < i; k++) {
    str += "*";
    }
    for (let l = 1; l <= i; l++) {
    str += "*";
    }
    console.log(str);
    }
    for (let i = norow; i >= 0; i--) {
    str = "";
    for (j = norow; j > i; j--) {
    str += " ";
    }
    for (k = 1; k < i; k++) {
    str += "*";
    }
    for (l = 1; l <= i; l++) {
    str += "*";
    }
    console.log(str);
    }
    }
    else console.log("wrong input");
    }

