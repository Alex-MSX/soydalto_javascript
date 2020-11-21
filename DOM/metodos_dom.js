//seleccionamos el elemento que tiene cierto ID
let obj1 = document.getElementById("parrafo");
document.write(obj1 + "<br>")

obj1.innerHTML = "Hola amigo"


//seleccionamos todos los elemento que tienen un cierto tipo de tag y devuelve una lista
let obj2 = document.getElementsByTagName("p");
obj2[3].innerText = "Estamos realizando una prueba JavaSC"

//querySelector devuelve el primer elemento de un cierto tipo
let obj3 = document.querySelector("p")
obj3.innerHTML = "Soy el tercer elemento"

//selecciono por clase pero solamente el primer elemento
let obj4 = document.querySelector(".clase1")
obj4.innerHTML = "Soy el cuarto elemento"

//selecciono por id y da igual que sea el primer elemento
let obj5 = document.querySelector("#prueba")
obj5.innerHTML = "Soy el quinto elemento"

let obj6 = document.querySelectorAll(".clase1")
document.write(obj6 + "<br>")

const input1 = document.querySelector("#input1");

//para modificar cualquier atributo
// input1.setAttribute("type","range")
// input1.setAttribute("type","color")
input1.setAttribute("type","text")
input1.setAttribute("placeholder","Amigo")

let a = input1.getAttribute("type")
document.write(input1 + "<br>")
document.write(a + "<br>")

const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable","true")
