// find the max value  from  multiple numbers 

function max(numbers){
    var result = 0;
    for(var i = 0; i < numbers.length; i++){
        if(result < numbers[i]){
            result = numbers[i];
        }
    }
    return result;
}
var numbers = [12,35,546,13245,342,300000];
console.log(max(numbers));