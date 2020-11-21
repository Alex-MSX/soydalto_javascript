const input = document.querySelector(".input-normal");

document.write("<br>" + input);
document.write("<br>" + input.className);

//modifico el valor
input.value = 50;
document.write("<br>" + input.value);

//modifico el tipo
input.type = "range";

//para aceptar archivos de un cierto tipo
input.type = "file";
input.accept = ".pdf";

//indica el mínimo de caracteres y si está dentro de un form es un requisito
input.type = "text";
input.minLength = 4;

input.placeholder = "Nombre"
input.required = "true";
