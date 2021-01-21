// sum of all numbers in a array

function sum(numbers){
    var total = 0;
    for(var i = 0; i < numbers.length; i++){
        var number = numbers[i];
        total += number;
    }
    return total;
}

var numbers = [1,2,3,4,5,6,7,8,9];
console.log(sum(numbers));