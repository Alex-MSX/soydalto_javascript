const sumar = (num1,num2) => {
  return num1 + num2
};

const restar = (num1,num2) => {
  return num1 - num2
};

const multiplicar = (num1,num2) => {
  return num1 * num2
}

const dividir = (num1,num2) => {
  return num1 / num2
}

alert("Que operación deseas realizar")
let operacion = prompt("sumar:1, restar:2, multiplicar:3, dividir:4")

if (operacion==1 || operacion==2 || operacion==3 || operacion==4) {
  let num1 = parseInt(prompt("Ingresa el primer número"))
  let num2 = parseInt(prompt("Ingresa el segundo número"))

  if (operacion == 1) {
    document.write("El resultado de la suma es: " + sumar(num1,num2))
  } else if (operacion == 2) {
    document.write("El resultado de la resta es: " + restar(num1,num2))
  } else if (operacion == 3) {
    document.write("El resultado de la multiplicación es: " + multiplicar(num1,num2))
  } else {
    document.write("El resultado de la división es: " + dividir(num1,num2))
  };
} else {
  document.write("Operación no encontrada")
};
