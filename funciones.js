//declaración de función normal
function saludar1(nombre) {
  document.write(`Hola ${nombre} como estás?`)
}

const saludar2 = function(nombre) {
  document.write(`Hola ${nombre} como estás?`)
}

const saludar3 = (nombre) => {
  document.write(`Hola ${nombre} como estás?`)
}

saludar1('Alejandro');
document.write("<br>")
saludar2('Liliana');
document.write("<br>")
saludar3('Maui')
