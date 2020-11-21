let cadena1 = "Hola como  estas!  como te llamas";
let cadena2 = "Me llamo Alejandro!";

let resultado = cadena1.concat(" ").concat(cadena2);
document.write(resultado + "<br><br>");

document.write(`La cadena1 dice: "${cadena1}"<br><br>`)

resultado = cadena1.startsWith("Hol");
document.write('La cadena1 empieza con "Hol": ')
document.write(resultado + "<br><br>");

resultado = cadena1.startsWith("Hos");
document.write('La cadena1 empieza con "Hos": ')
document.write(resultado + "<br><br>");

resultado = cadena1.endsWith("tas!");
document.write('La cadena1 termina con "tas!": ')
document.write(resultado + "<br><br>");

resultado = cadena1.includes("como");
document.write('La cadena1 incluye la palabra "como": ')
document.write(resultado + "<br><br>");

resultado = cadena1.indexOf("como");
document.write('La palabra "como" está en el índice: ')
document.write(resultado + "<br><br>");

resultado = cadena1.lastIndexOf("como");
document.write('La última palabra "como" inicia en el índice: ')
document.write(resultado + "<br><br>");

resultado = cadena1.toUpperCase();
document.write('La cadena1 en mayúsculas: ')
document.write(resultado + "<br><br>");

resultado = cadena1.toLowerCase();
document.write('La cadena1 en minúsculas: ')
document.write(resultado + "<br><br>");

resultado = cadena1.split(" ")
document.write('La cadena1 como array: ')
document.write(resultado.length + "<br><br>");

resultado = cadena1.trim()
document.write('La cadena1 sin espacios adicionales: ')
document.write(resultado + "<br><br>");
