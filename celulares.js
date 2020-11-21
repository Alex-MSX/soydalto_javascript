class celular {
  constructor(color, peso, resPant, resCam, ram){
    this.color = color;
    this.peso = peso;
    this.resPant = resPant;
    this.resCam = resCam;
    this.ram = ram;
    this.encendido = false;
  }

  prender(){
    if (this.encendido){
      alert("El celular ya está encendido");
    } else {
      alert("Encendiendo celular");
      this.encendido = true;
    };
  };

  apagar(){
    if (this.encendido) {
      alert("Apagando celular");
      this.encendido = false;
    } else {
      alert("El celular ya está apagado");
    };
  };

  reiniciar(){
    if (this.encendido) {
      alert("Reiniciando celular");
    } else {
      alert("El celular está apagado");
    };
  };

  tomarFoto(){
    alert(`Foto tomada en resolución ${this.resCam}`);
  };

  grabarVideo(){
    alert(`Grabando en resolución ${this.resCam}`);
  };

  mostrarInfo(){
    return `
    Color: <strong>${this.color}</strong><br>
    Peso: <strong>${this.peso}</strong><br>
    Tamaño de pantalla: <strong>${this.resPant}</strong><br>
    Resolución de cámara: <strong>${this.resCam}</strong><br>
    Memoria RAM: <strong>${this.ram}</strong><br>
    `;
  };
};

class celularAltaGama extends celular{
  constructor(color, peso, resPant, resCam, ram, resCam1){
    super(color, peso, resPant, resCam, ram);
    this.resCam1 =resCam1;
  };

  mostrarInfoAltaGama(){
    return this.mostrarInfo() + `Resolución cámara extra: <strong>${this.resCam1}</strong>`;
  };
};

const celular1 = new celular("negro","160g",5,"UHD","2GB");
const celular2 = new celular("rojo","155g",5.5,"4k","8GB");
const celular3 = new celular("gris","146g",5.9,"fHD","4GB");
const celular4 = new celularAltaGama("negro","130g",5.9,"4K","8GB","UHD");

//document.write("Celular encendido: " + celular1.encendido + "<br>")
//celular1.prender();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.apagar();

document.write(celular1.mostrarInfo() + "<br>")
document.write(celular2.mostrarInfo() + "<br>")
document.write(celular3.mostrarInfo() + "<br>")
document.write(celular4.mostrarInfoAltaGama() + "<br>")
