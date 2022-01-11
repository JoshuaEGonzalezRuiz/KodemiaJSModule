let nombres = "";
let edades = "";
let domicilios = "";
let grupos = "";
let matriculas = "";
let calificaciones = "";

let primerSegundoGrado =
  "Español@Matemáticas@Exploración de la Naturaleza y la Sociedad@Formación Cívica y Ética@Educación Artística";

let tercerGrado =
  "Español@Matemáticas@Ciencias Naturales@La Entidad donde vivo@Formación Cívica y Ética@Educación Artística";

let otrosGrados =
  "Español@Matemáticas@Ciencias Naturales@Geografía@Historia@Formación Cívica y Ética@Educación Artística";

let seleccion = "";

function mostrarMenu() {
  console.log(
    "¡Bienvenido al Gestor de calificaciones de la escuela primaria kodersitos!"
  );
  console.log("Seleccione alguna de las siguientes opciones:");
  console.log("1. Registrar a un alumno");
  console.log("2. Mostrar información de alumno");

  seleccion = prompt("Tu selección: ");
}

function start() {
  do {
    mostrarMenu();
    switch (seleccion) {
      case "1":
        seleccion = "";
        registraAlumno();
        break;
      case "2":
        seleccion = "";
        mostrarInformación();
        break;
      default:
        seleccion = "";
        console.log("Opcion no valida");
    }
  } while (seleccion.isNotEmpty);
}

function registraAlumno() {
  console.clear();
  console.log("Ingresa los datos que se te solicitan a continuación: ");
  let nombre = prompt("Nombre completo: ");
  nombres += nombre + "@";
  let edad = prompt("Edad: ");
  edades += edad + "@";
  let domicilio = prompt("Domicilio: ");
  domicilios += domicilio + "@";
  let grupo = prompt("Grupo escolar: ");
  grupos += grupo + "@";
  let matricula = nombre + grupo + edad;
  matriculas += matricula + "@";
  console.clear();
  registrarCalificaciones(grupo);
}

function registrarCalificaciones(grupo) {
  console.log(
    "Ingresa las calificaciones del alumno por materia, siguiendo la métrica del 5 al 10: "
  );

  if (grupo[0] == "1" || grupo[0] == "2") {
    let materias = primerSegundoGrado.split("@");
    registroMaterias(materias);
  } else if (grupo[0] == "3") {
    let materias = tercerGrado.split("@");
    registroMaterias(materias);
  } else {
    let materias = otrosGrados.split("@");
    registroMaterias(materias);
  }
  console.clear();
  start();
}

function registroMaterias(materias) {
  let calificacion = "";

  for (let i = 0; i < materias.length; i++) {
    if (i == materias.length - 1) {
      calificacion += materias[i] + ": " + prompt(`${materias[i]}`);
    } else {
      calificacion += materias[i] + ": " + prompt(`${materias[i]}`) + ",";
    }
  }
  calificaciones += calificacion + "@";
}

function mostrarInformación() {
  console.clear();
  console.log("Ingresa el nombre del alumno para obtener su información: ");
  let nombre = prompt("Nombre del alumno: ");
  let alumnos = nombres.split("@");
  console.clear();

  console.log("Datos del alumno: ");
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i] == nombre) {
      console.log("Nombre completo: " + nombre + "\n");
      console.log("Edad: " + edades.split("@")[i] + "\n");
      console.log("Domicilio: " + domicilios.split("@")[i] + "\n");
      console.log("Matricula: " + matriculas.split("@")[i] + "\n");
      console.log("Grado y grupo: " + grupos.split("@")[i] + "\n");
      console.log("Calificaciones: " + "\n");
      let puntajes = calificaciones.split("@")[i].split(",");
      let promedio = 0;
      for (let i = 0; i < puntajes.length; i++) {
        console.log(puntajes[i]);
        promedio += parseInt(puntajes[i].replace(/\s+/g, "").split(":")[1]);
      }
      promedio = promedio / puntajes.length;

      console.log("\nPromedio general: " + promedio + "\n");
    }
  }

  prompt("Ingrese el comando enter para continuar");
  console.clear();
  start();
}

start();
