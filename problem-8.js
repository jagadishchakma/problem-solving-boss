// calculate factorial of a number

function factorial(n){
    var total = n;
    for(var i = 1; i <= n; i++){
        total *= i;
    }
    return total;
}


console.log(factorial(3));