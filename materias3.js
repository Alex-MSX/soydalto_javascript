//asistencia [0,100]  calificacion[0,10]  trabajos[0,4]
let materias = {
  "fisica":[90,6,3],
  "matematicas":[84,8,2],
  "logica":[92,8,4],
  "quimica":[96,7,3],
  "calculo":[91,6,3],
  "programacion":[79,7,4],
  "biologia":[85,9,2],
  "deportes":[78,7,3],
  "algebra":[100,10,4],
}

const estatusMateria = () => {
  for (var materia in materias) {

    let asistencia = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajos = materias[materia][2];

    console.log(`${materia}:`);

    if (asistencia >= 90) {
      console.log(`%c   Asistencias: en orden`,"color:green");
    } else {
      console.log(`%c   Asistencias: falta`,"color:red");
    };

    if (promedio >= 7){
      console.log(`%c   Promedio: en orden`,"color:green");
    } else {
      console.log(`%c   Promedio: falta`,"color:red");
    };

    if (trabajos >= 3){
      console.log(`%c   Trabajos: en orden`,"color:green");
    } else {
      console.log(`%c   Trabajos: falta`,"color:red");
    };

  }
}

estatusMateria();
