let alumnos = {
  "fisica":["Prof. Perez","alejandro","maria","carlos","alondra","manuel","joaquin","alberto"],
  "programacion":["Prof. Martinez","maria","carlos","lucia","pedro","ramon"],
  "logica":["Prof. Solis","alejandro","lucia","pedro"],
  "quimica":["Prof. Rodriguez","alejandro","maria","carlos","lucia","pedro"]
};

const inscribir = (alumno,materia) => {
  let personas = alumnos[materia].length - 1

  if (alumnos[materia].length - 1 < 10){
    alumnos[materia].push(alumno);
    alert(`Felicidades ${alumno} quedaste inscrito en la materia de ${materia} satisfactoriamente`)
  } else {
    alert(`Lo siento ${alumno} el curso está lleno, no se puede inscribir nadie más`);
  }
}

let repetir = true;

while (repetir) {
  let alumno = prompt("Ingrese su nombre:")
  let materia = prompt("Ingrese la materia a la que se desea inscribir")
  inscribir(alumno,materia)

  let respuesta = prompt("Desea inscribir a alguien más (y/n):")

  if (respuesta == "n") {
    repetir = false;
  }
}
