//check whether a number is a prime number or not 

function isPrime(n){
    for(var i = 2; i < n; i++){
        var check = n % i;
        if(check == 0){
           return  "This is not a prime a number";
        }else{
           return "This is a prime number";
        }
    }
}
console.log(isPrime(17));