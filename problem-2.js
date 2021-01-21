function reverse(speech){
    var reverse = "";
    for(var i = 0; i < speech.length; i++){
        reverse = speech[i]  + reverse;
    }

    return reverse;
}

var speech = reverse('JavaScriopt is awesome programming language');

console.log(speech);
