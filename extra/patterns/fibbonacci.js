
function fibonacci(num) {
    if(num < 2) {
    return num;
    }
    else {
    return fibonacci(num-1) + fibonacci(num - 2);
    }
    }
    
    let n = process.argv[2];
    
    if(n <=0) {
    console.log('Enter a Positive Number.');
    }
    else {
    let fibo = "";
    for(let i = 0; i < n; i++) {
    fibo = fibo + " " + fibonacci(i).toString();
    }
    console.log(fibo);
    }
