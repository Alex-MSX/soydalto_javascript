//for incremental
document.write("Loop incremental")
for (let i = 0; i < 10; i++) {
  document.write(i)
  document.write("<br>")
}

document.write("<br>")

//for decremental
document.write("Loop decremental")
for (let i = 5; i >= 0; i--) {
  document.write(i)
  document.write("<br>")
}

document.write("<br>")
frutas = ["manzana","pera","platano","sandia"];
//for in
for (fruta in frutas) {
  document.write(`${fruta} -> ${frutas[fruta]}`)
  document.write("<br>")
}

document.write("<br>")
//for of
for (fruta of frutas) {
  document.write(fruta);
  document.write("<br>")
}
