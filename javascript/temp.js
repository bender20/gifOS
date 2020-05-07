let inicio=0;
let timeout=0;
let result = null;
function empezarDetener() {
    if(timeout == 0) {
        inicio = vuelta = new Date().getTime();
        funcionando();
    }else{
        clearTimeout(timeout);
        timeout=0;
    }
}
function funcionando() {
    let actual = new Date().getTime();
    let diff = new Date(actual-inicio);
    result=LeadingZero(diff.getUTCHours())+":"+LeadingZero(diff.getUTCMinutes())+":"+LeadingZero(diff.getUTCSeconds())+":"+LeadingZeroM(diff.getUTCMilliseconds());
    document.getElementById('crono').innerHTML = result;
    timeout=setTimeout("funcionando()",20);
}
function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : + Time;
}
function LeadingZeroM(Time) {
    return (Time < 100) ? "0" + Time : + Time;
}
function cronoFix() {
    document.getElementById('crono2').innerHTML = result;
}
let botonRec2 = document.querySelector("#buttonCapture");
botonRec2.addEventListener("click", empezarDetener);
let buttonGo2 = document.getElementById("buttonGo");
buttonGo2.addEventListener("click", empezarDetener);
buttonGo2.addEventListener("click", cronoFix);