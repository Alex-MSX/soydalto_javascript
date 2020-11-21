const obtenerInformacionMateria = (materia) => {
  alumnos = {
    "fisica":["Prof. Perez","alejandro","maria","carlos"],
    "programacion":["Prof. Martinez","maria","carlos","lucia","pedro","ramon"],
    "logica":["Prof. Solis","alejandro","lucia","pedro"],
    "quimica":["Prof. Rodriguez","alejandro","maria","carlos","lucia","pedro"]
  };

  if (alumnos[materia] !== undefined) {
    return [materia, alumnos[materia]];
  } else {
    return alumnos;
  };
}

const mostrarInformacionMateria = (materia) => {
  let info = obtenerInformacionMateria(materia);

  if (info.length != undefined) {
    let materia = info[0];
    let profesor = info[1][0];
    let alumnos = info[1].slice(1,info[1].lenght);
    document.write(`Alumnos presentes en la materia: ${materia}<br>Profesor asignado: ${profesor}<br>Alumnos inscritos: ${alumnos}<br><br>`);
  } else {
    document.write("Materia no encontrada<br><br>");
  }
};

const totalClases = (alumno) => {
  let info = obtenerInformacionMateria();
  let total = 0;
  let clases = [];

  for (curso in info) {
    if (info[curso].includes(alumno)){
      total++;
      clases.push(curso);
    };
  };

  return `El alumno ${alumno} está en ${total} clases. Clases inscritas: ${clases}<br>`;
};

let materia = prompt("Que materia deseas consultar:");
mostrarInformacionMateria(materia);

document.write(totalClases("alejandro"));
document.write(totalClases("ramon"));
