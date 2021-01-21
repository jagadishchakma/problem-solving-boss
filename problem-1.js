// count the number of words in a string 

var speech = "Programming is fun and it's a fassion not serious.";

function totalWords(speech){
    var total = 0;
    for(var  i = 0; i <= speech.length;  i++){
        var letter = speech[i];
        if(letter == " " && speech[i-1] != " "){
            total++;
        }
    }
    total++;

    return total;
}


var result = totalWords(speech);
console.log(result);

