let semana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

let meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

for(let i = 0; i < meses.length; i++){//meses
    console.log(`****************** Mes ${meses[i]} *****************`);
    for (let j = 1; j <= 4; j++) {//semanas
        console.log(`============= Semana ${j} ===============`);
      
        for (let x = 0; x < semana.length; x++) {//dias
          let dia = semana[x];
          if (
            dia === "Lunes" ||
            dia === "Miercoles" ||
            dia === "Viernes" ||
            dia === "Domingo"
          ) {
            console.log(`el dia ${dia} de la semana ${j} saqué la basura`);
          } else {
            console.log(
              `el dia ${dia} de la semana ${j} no saque la basura, por que no estaba abierto`
            );
          }
        }
      
        console.log(`=========================================`);
      }
    console.log(`*********************************************`);
}