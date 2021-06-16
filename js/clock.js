let getName = document.querySelector("#myName")
getName.innerHTML = prompt("Adınızı giriniz..")

function showTime() {

    var date = new Date();
    var day = date.getDay();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();


    if (day == 1) {
        day = "Pazartesi"
    } else if (day == 2) {
        day = "Salı"
    } else if (day == 3) {
        day = "Çarşamba"
    } else if (day == 4) {
        day = "Perşembe"
    } else if (day == 5) {
        day = "Cuma"
    } else if (day == 6) {
        day = "Cumartesi"
    } else day = "Pazar"



    let info = `${h}:${(m < 10 ? '0' : '') + m}:${(s < 10 ? '0' : '') + s} ${day}`
    let getDoc = document.getElementById("myClock")
    getDoc.innerHTML = info

    setTimeout(showTime, 1000);
}
showTime();
