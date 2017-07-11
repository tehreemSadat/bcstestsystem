$(document).ready(function () {
    var tt = localStorage.getItem("counter");
    if(tt == null || tt == "") {
            var counter=0;
    }else {
            var counter = Number(localStorage.getItem("counter"));
    }
    var minsec = Math.floor((30-counter) / 60) + ':' + ((30-counter) % 60);
    document.getElementById("timer").innerHTML=minsec;
    var interval = setInterval(function () {
            counter = (counter + 1);
            localStorage.setItem("counter",String(counter));       
            var time  = 30 - counter;
            if(time==0)
            {
                counter=0;
                localStorage.setItem("counter",String(counter));
                 $("#myForm").submit();
                 clearInterval(interval);
            }
            var minsec = Math.floor(time / 60) + ':' + (time % 60);
            document.getElementById("timer").innerHTML=minsec;
        }, 1000);
    
});