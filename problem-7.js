// create a fibonacci series
function fibo(n1,n2){
    var fibo = [n1,n2];
    for(var i = 2; i < 20; i ++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

console.log(fibo(2,3));