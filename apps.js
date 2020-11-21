class app {
  constructor(descargas, puntuacion, peso){
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false
    this.instalada = false
  };

  abrir(){
    if (this.iniciada == false && this.instalada == true) {
      alert("Iniciando aplicación");
      this.iniciada = true;
    };
  };

  cerrar(){
    if (this.iniciada) {
      alert("Cerrando aplicación");
      this.iniciada = false;
    };
  };

  instalar() {
    if (this.instalada) {
      alert("La App ya se encuentra instalada")
    } else {
      alert("Instalando App")
      this.instalada = true;
    }
  }

  desinstalar(){
    if (this.instalada) {
      alert("Desinstalando App")
      this.instalada = false;
    } else {
      alert("La App no se encuentra instalada")
    }
  };

  appInfo(){
    return `
    Descargas: <strong>${this.descargas}</strong><br>
    Calificación: <strong>${this.puntuacion}</strong><br>
    Tamaño: <strong>${this.peso}</strong><br>
    `;
  };
};

const app1 = new app(16000, "5 estrellas", "2.4MB")

app1.abrir();
app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();

document.write(app1.appInfo())
