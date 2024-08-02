var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;
var ok = 2;  // Ensure this variable is initialized, as it was used but not defined in the original code

function timer(){
    // Set the start date to September 3, 2022 at 17:00
    var start = new Date(2022, 8, 2, 23, 60);  
    var now = new Date();
    var t = now - start;
    
    // Calculate the time difference in days, hours, minutes, and seconds
    var d = Math.floor(t / (1000 * 60 * 60 * 24));
    var h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((t % (1000 * 60)) / 1000);
    
    // Format the values to ensure two-digit representation
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }

    // Update the HTML elements with the calculated values
    document.getElementById("d").innerHTML = d;
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;
}

function fadein(){
    if(val < 1){
        val += 0.025;
        dv.style.opacity = val;
    }
    else{
        clearInterval(fadeinInterval);
        if(ok == 2){
            ok += 1;
        }
    }
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function(){
    if(ok == 2){
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);
