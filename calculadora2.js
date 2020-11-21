class calculadora {
  constructor() {}
  sumar(num1,num2) {
    return num1 + num2;
  };

   restar(num1,num2) {
    return num1 - num2;
  };

  multiplicar(num1,num2) {
    return num1 * num2;
  };

  dividir(num1,num2) {
    return num1 / num2;
  };

  elevar(num1,exp) {
    return Math.pow(num1,exp);
  };

  raizCuadrada(num){
    return Math.sqrt(num);
  };

  raizCubica(num){
    return Math.cbrt(num);
  };
};

alert("Que operación deseas realizar");
let operacion = prompt("sumar:1, restar:2, multiplicar:3, dividir:4, elevar:5, raíz cuadrada:6, raíz cúbica:7");
let calculadora1 = new calculadora();

if (operacion==1 || operacion==2 || operacion==3 || operacion==4) {
  let num1 = parseInt(prompt("Ingresa el primer número"));
  let num2 = parseInt(prompt("Ingresa el segundo número"));

  if (operacion == 1) {
    document.write("El resultado de la suma es: " + calculadora1.sumar(num1,num2));
  } else if (operacion == 2) {
    document.write("El resultado de la resta es: " + calculadora1.restar(num1,num2));
  } else if (operacion == 3) {
    document.write("El resultado de la multiplicación es: " + calculadora1.multiplicar(num1,num2));
  } else {
    document.write("El resultado de la división es: " + calculadora1.dividir(num1,num2));
  };
} else if (operacion==5) {
  let num1 = parseInt(prompt("Ingresa el primer número"));
  let num2 = parseInt(prompt("A qué potencia lo deseas elevar"));
  document.write("El resultado de la potencia es: " + calculadora1.elevar(num1,num2));
} else if (operacion==6){
  let num1 = parseInt(prompt("Ingresa un número"));
  document.write("Su raíz cuadrada es: " + calculadora1.raizCuadrada(num1));
} else if (operacion==7){
  let num1 = parseInt(prompt("Ingresa un número"));
  document.write("Su raíz cúbica es: " + calculadora1.raizCubica(num1));
} else {
    document.write("Operación no encontrada");
};
