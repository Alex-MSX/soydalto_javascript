console.log("Hola como estas")

//para contar cuantas veces ingresé a un código y resetea el contador
console.count()
console.count()
console.count()
console.count()
console.count()
console.count()
console.countReset()

//para revisar cuando tiempo de ejecución del código
// console.time()
// console.timeLog()
// console.timeEnd()

const aleatorios = (n) => {
  resultado = [];

  for (let i = 0; i < n; i++) {
    resultado.push(Math.random());
  };

  return resultado;
};


console.time();
let vector1 = aleatorios(10);
console.log("Tiempo para generarlos:")
console.timeEnd();

console.time();
vector1.forEach((item) => {
  document.write(item + "<br>");
});
console.log("Tiempo para cargarlos en la página:")
console.timeEnd();
