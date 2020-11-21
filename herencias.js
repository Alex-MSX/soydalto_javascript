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

class perro extends animal {
  //el constructor es obligatorio pero se escribe de la siguiente forma
  constructor(especie, edad, color, raza){
    super(especie,edad,color)
    this.raza = raza
  }

  ladrar(){
    document.write("Guau guau!")
  }

}

let perro1 = new perro("perro",5,"blanco","chow chow")
perro1.saludar();
document.write("<br><br>")
perro1.ladrar();
document.write("<br><br>")

document.write(perro1.raza)
document.write("<br><br>")
perro1.raza = "Pastor alemán"
document.write(perro1.raza)
