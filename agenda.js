let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let descanso = "10 minutos de descanso";
let casa = "30 minutos de cosas de la casa";
let practicos = "100 minutos para trabajos prácticos";


for (let i = 0; i < 14; i++) {

  if (i % 7 == 0) {
    console.groupEnd();
    console.group(`Semana ${(i+7)/7}:`);
  };

  console.group(`Día ${i+1}:`);
  console.log(trabajo);
  console.log(descanso);
  console.log(estudio);
  console.log(practicos);
  console.log(casa);
  console.groupEnd();
};
