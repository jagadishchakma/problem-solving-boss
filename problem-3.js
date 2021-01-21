//remove duplicate item from an array

var number = [1,2,5,5,7,3,2,4,6,2,2];
var real =  [];

for(var i = 0; i < number.length; i++){
   var index = number[i];
   var unique = real.indexOf(index);
   if(unique == -1){
       real.push(index);
   }
}

console.log(real);