let Name = prompt("Adınızı Giriniz?")
let myname = document.querySelector("#myName")
myname.innerHTML = `${myname.innerHTML} <bold> ${Name}</bold> ` 

if(Name == "")
    alert("Adınızı Girmediniz.")

function showTime() {
var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var day = date.getDay(); 
  
    if (day == 1) {
      day = "Pazartesi";
    } else if (day == 2) {
      day = "Salı";
    } else if (day == 3) {
      day = "Çarşamba";
    } else if (day == 4) {
      day = "Perşembe";
    } else if (day == 5) {
      day = "Cuma";
    } else if (day == 6) {
      day = "Cumartesi";
    } else if (day == 7) {
      day = "Pazar";
    }
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    var time = h + ":" + m + ":" + s + " " + day;
   
   
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${time}`

    setTimeout(showTime, 1000);             
}
showTime();
