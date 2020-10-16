function prime(x){
    let flag=0;
    for(let i=2;i<=x/2;i++){
        if(x%i==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log("prime");
    }
    else{
        console.log("not prime");
    }
}
x = process.argv[2];
prime(x);

