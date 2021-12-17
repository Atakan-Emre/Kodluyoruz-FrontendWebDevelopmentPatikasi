const addBtn = document.querySelector("#liveToastBtn") //ekle butonu
const input = document.querySelector("#task") //input şeçimi
const list = document.querySelector("#list") // list şeçimi
const toastSucces = document.querySelector("#liveToast")
const toastUnSucces = document.querySelector("#liveToastErr")
let defaultLi = document.getElementsByTagName("li"); // bütün li elementler için

addBtn.addEventListener("click", newEelement) // click fonksiyonun yeni elemente tanımlama
list.addEventListener("click", deleteElement)
list.addEventListener("click", missonComplite)

loadPage() // sayfa yenilenince localstorage gitmemesi için

//mevcut listeye x iconu ekleme
for (let i = 0; i < defaultLi.length; i++) {
    if (defaultLi[i].className == "close") {
        console.log("hatalı")
    } else {
        let span = document.createElement("span")
        span.classList.add("close")
        span.innerHTML = "\u00D7"
        defaultLi[i].appendChild(span)
        console.log("test")
    }
}

function missonComplite(e) {
    e.target.classList.toggle("checked")

}
// yeni elementler ekleme
function crtElement() {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerHTML = "\u00D7"
    span.classList.add("close")
    li.innerHTML = `<span>${input.value} </span> `
    li.appendChild(span)
    list.appendChild(li)

}
// yeni element oluşturma
function newEelement() {
    if (input.value.trim() != "" && input.value.trim() != " ") {
        crtElement()
        loadStorage(input.value)
        $(".success").toast("show");  // başarılı başarısız mesajları için toast mesajları
        input.value = ""
    } else {
        $(".error").toast("show");
    }
}

//element silme 
function deleteElement(e) {
    if (e.target.className === "close") {
            e.target.parentElement.remove(); 
            let prm = e.target.parentElement.firstChild.nextElementSibling.textContent.trim();
            deleteStorage(prm);
        }

    }

//localstorage komutu
function loadStorage(prm) {
    let storage = JSON.parse(localStorage.getItem("todo"))
    let toDos;
    if (storage == null) {
        toDos = [];
        console.log("if test ")
    } else {
        toDos = getStorage()
    }
    toDos.push(prm)
    localStorage.setItem("todo", JSON.stringify(toDos))
    console.log("todos  test : " + toDos)
}
// localstorage veriyi geri alma
function getStorage() {
    let toDo = JSON.parse(localStorage.getItem("todo"))
    return toDo
}
// sayfayı yenilediğimde verilerin gitmemesi
function loadPage() {
    let toDo = getStorage()
    if (toDo != null) {
        let html
        for (let i = 0; i < toDo.length; i++) {
            html = `<li>
             <span>
             ${toDo[i]}
             </span>
             <span class = "close"> \u00D7 </span>
             </li>`
            list.innerHTML += html
        }
    }
}
// localstorageden verileri silme
function deleteStorage(prm) {
    let toDo = getStorage()
    toDo.forEach((element, id) => {
        if (element == prm) {
            toDo.splice(id, 1)
        }
    });
    localStorage.setItem("todo", JSON.stringify(toDo))
}