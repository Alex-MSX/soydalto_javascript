class animal {

  //siempre lo primero es el constructor
  constructor(especie, edad, color) {
    this.especie = especie
    this.edad = edad
    this.color = color
    this.info = `Hola! Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
  };

  //para construir métodos dentro de las clases necesito definir una función no flecha
  saludar() {
    document.write(this.info);
  };
};

//crear el nuevo objeto
let perro = new animal("perro",10,"café");
perro.saludar();

document.write("<br><br>");
let gato = new animal("gato",3,"negro");
gato.saludar();

document.write("<br><br>");
let pajaro = new animal("pajaro",2,"verde");
pajaro.saludar();
