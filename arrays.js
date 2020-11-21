let nombres = ["alejandro","jorge","leticia","patricio"]

document.write(nombres + "<br><br>")

let resultado = nombres.pop()
document.write(`Elemento eliminado: ${resultado}<br>`)
document.write(`Elimina el último elemento del array: ${nombres}<br><br>`)

resultado = nombres.shift()
document.write(`Elemento eliminado: ${resultado}<br>`)
document.write(`Elimina el primer elemento del array: ${nombres}<br><br>`)

resultado = nombres.push("mauricio","roberto")
document.write(`Ingresa nuevos elementos al final del array: ${nombres}<br>`)
document.write(`Ahora el array tiene ${resultado} elementos<br><br>`)

resultado = nombres.unshift("carlos","esperanza")
document.write(`Ingresa nuevos elementos al inicio del array: ${nombres}<br>`)
document.write(`Ahora el array tiene ${resultado} elementos<br><br>`)

resultado = nombres.reverse()
document.write(`El array fue volteado y quedó: ${nombres}<br><br>`)

resultado = nombres.sort()
document.write(`El array ordenado alfabéticamente quedó: ${nombres}<br><br>`)

//funcion que "reemplaza" a partir del primer número indicado el número de elementos que menciono, y si deseo agregar, lo añado al argumento (inicio, elementos a reemplazar, elementos a agregar)
resultado = nombres.splice(2,2,"maui","gin")
document.write(`Elementos eliminados: ${resultado}<br>`)
document.write(`El nuevo array quedó: ${nombres}<br><br>`)

//une todos los elementos de un array con el caracter que indiquemos
resultado = nombres.join("--")
document.write(`${resultado}<br><br>`)

//es el similar al substring para cadenas
resultado = nombres.slice(0,2)
document.write(`${resultado}<br><br>`)

resultado = nombres.slice(0,-1)
document.write(`${resultado}<br><br>`)

resultado = nombres.includes("leticia");
document.write('El array incluye el elemento "leticia": ')
document.write(resultado + "<br><br>");

resultado = nombres.indexOf("maui");
document.write('El elemento "maui" está en el índice: ')
document.write(resultado + "<br><br>");

//como realizar un loop dentro del array
nombres.forEach(elemento => {
  document.write(elemento + "<br>")
})

//realizar un loop dentro de un array pero que cumpla alguna condicion
resultado = nombres.filter(elemento => elemento.length > 4)
document.write(resultado + "<br><br>");
