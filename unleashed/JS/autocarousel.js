var counter = 1;
    
setInterval(function(){
    document.getElementById('s1-' + counter).checked = true;   
    counter++;
    if(counter > 5){
        counter = 1
    }
}, 3000);

var counter2 = 1;

setInterval(function(){
    document.getElementById('s2-' + counter2).checked = true;
    counter2++;
    if(counter2 > 5){
        counter2 = 1
    }
}, 3000);