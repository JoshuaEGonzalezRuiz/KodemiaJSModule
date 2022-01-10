console.log("Práctica Clase 9 - Métodos funcionales en Arrays (pt. 2)\n");

let animalesVenenosos = [
  {
    nombre: "Medusa avispa de mar",
    nombreCientifico: "Chironex fleckeri",
    longevidadAnios: 1,
    ubicacion: ["Aguas costeras australianas"],
    descripcion:
      "Es una gran medusa y de ella salen 70 tentáculos de aproximadamente 80 cm de largo. Es translúcida y brilla en la oscuridad.Puede llegar a alcanzar el tamaño de un balón de baloncesto, con tentáculos de hasta 3 metros de largo, cada uno con 5 mil millones de células urticantes (cnidocitos) que pueden inyectar un letal veneno.",
  },
  {
    nombre: "Serpiente marina de Dubois",
    nombreCientifico: "Aipysurus duboisii",
    longevidadAnios: 25,
    ubicacion: [
      "Papúa Nueva Guinea",
      "Nueva Caledonia",
      "Mar de Coral",
      "Mar de Arafura",
      "Mar de Timor",
      "Océano Índico",
    ],
    descripcion:
      "Viven a profundidades de hasta 80 metros (262 pies) en planicies de arrecifes de coral, sedimentos arenosos y limosos que contienen algas,invertebrados y corales o esponjas que pueden servir como refugio. Estas serpientes se alimentan de morenas y varios peces que viven en el fondo marino,de hasta 110 cm (3,6 pies) de tamaño. Son vivíparos,dando a luz a crías vivas en lugar de poner huevos. Tienen agresividad media, es decir, morderán si son provocados, pero no espontáneamente. Los colmillos miden 1,8 mm de largo, que son relativamente cortos para una serpiente, y el rendimiento del veneno es de 0,43 mg. Aipysurus duboisii es una especie crepuscular, lo que significa que son más activos al amanecer y al atardecer.",
  },
  {
    nombre: "Pez piedra de estuario",
    nombreCientifico: "Synanceia horrida",
    longevidadAnios: 13,
    ubicacion: ["Australia", "Archipiélago malayo"],
    descripcion:
      "Es el actinopterigio más venenoso, y el contacto directo con las espinas de sus aletas, que contienen un potente veneno neurotóxico, puede ser mortal para los seres humanos. Cuando se camufla se asemeja a una roca (de ahí su sobrenombre), lo que los hace pasar desapercibidos y pueden ser pisados de forma accidental.",
  },
  {
    nombre: "Serpiente taipán",
    nombreCientifico: "Oxyuranus microlepidotus",
    longevidadAnios: 13,
    ubicacion: ["Australia"],
    descripcion:
      "Según el valor medio de la dosis letal en ratones, el veneno del taipán interior es, con mucho, el más tóxico de cualquier serpiente, mucho más que incluso el de las serpientes marinas y tiene el veneno más tóxico de cualquier reptil cuando se prueba en cultivo de células cardíacas humanas. El taipán interior es un cazador especializado de mamíferos, por lo que su veneno está especialmente adaptado para matar especies de sangre caliente. Se estima que una mordedura posee suficiente letalidad para matar al menos a 100 humanos completamente adultos. Es una serpiente extremadamente rápida y ágil que puede atacar instantáneamente con extrema precisión, a menudo golpea varias veces en el mismo ataque, y se envanoma en casi todos los casos.",
  },
  {
    nombre: "Rana punta de flecha",
    nombreCientifico: "Dendrobatidae",
    longevidadAnios: 12,
    ubicacion: ["Centroamérica", "América del Sur"],
    descripcion:
      "Estas ranas se caracterizan popularmente por su piel brillante y coloreada, poseen una coloración aposemática. El rango de colores va del naranja luminoso y negro azulado al amarillo y el rojo. Sin embargo, los miembros del género Colostethus son generalmente castaños y poco llamativos. Las ranas van de un tamaño de 1 a 6 cm de longitud, dependiendo de la edad y la especie de rana.",
  },
  {
    nombre: "Pulpo de anillos azules",
    nombreCientifico: "Hapalochlaena",
    longevidadAnios: 4,
    ubicacion: ["Japón", "Australia"],
    descripcion:
      "Los pulpos de anillos azules son del tamaño de una pelota de golf, sin embargo portan veneno suficiente para quitarles la vida a varias personas. No hay antídoto conocido para su veneno. El veneno producido por estos pulpos contiene tetrodotoxina, 5-hidroxitriptamina, hialuronidasa, tiramina, histamina, triptamina, octopamina, taurina, acetilcolina y dopamina. La mayor neurotoxina de estos pulpos se llamó originalmente maculotoxina, pero luego se comprobó que era idéntica a la tetrodotoxina, una neurotoxina que se puede encontrar también en el pez globo y en Conidae. La tetrodotoxina bloquea los canales de sodio, causando una parálisis motriz. Esa toxina es creada por una bacteria en las glándulas salivales del pulpo. Son estas bacterias quienes le dan el color azul característico a sus anillos.",
  },
  {
    nombre: "Mamba negra",
    nombreCientifico: "Dendroaspis polylepis",
    longevidadAnios: 11,
    ubicacion: ["África subsahariana"],
    descripcion:
      "Tiene un cuerpo cilíndrico, largo y delgado, la cabeza en forma de sarcófago, con una cresta frontal ligeramente pronunciada y ojos de tamaño medio. Los adultos tienen una longitud media de 2 a 3 m, aunque hay informes de ejemplares de entre 4,3 y 4,5 m. Es la segunda especie de serpiente venenosa de mayor tamaño, solo superada en longitud por la cobra real (Ophiophagus hannah). Colmillos proteroglifos (en la parte delantera de la boca) de hasta 6,5 mm de longitud,​ situados en la parte anterior del maxilar superior. La cola es larga y delgada, las vértebras caudales representan entre el 17 y el 25 % de su longitud corporal. Pesa unos 1,6 kg, aunque un estudio realizado con siete ejemplares dio como resultado un peso medio de 1,03 kg, que fue desde los 520 g de un ejemplar de 1,01 m de y los 2,4 kg de uno de 2,57 m de longitud total.",
  },
];

console.log(animalesVenenosos);

console.log("\n");

console.log(
  'Creamos un arreglo en el cual solo se incluyan los nombres de los animales encontrados en el objeto "animalesVenenosos": \n'
);

let nombresAnimalesVenenosos = animalesVenenosos.map(
  (animalVenenoso) => animalVenenoso.nombre
);

console.log(nombresAnimalesVenenosos);

console.log("\n");

console.log(
  'Creamos un arreglo en el cual solo se incluyan los animales que están en más de una ubicación según el objeto "animalesVenenosos": \n'
);

let ubicacionAnimalesVenenosos = animalesVenenosos.filter(
  (animalVenenoso) => animalVenenoso.ubicacion.length > 1
);

console.log(ubicacionAnimalesVenenosos);

console.log("\n");

console.log(
  'Obtenemos la suma total de los años de longevidad de los elementos del objeto "animalesVenenosos" y luego obtenemos su promedio: \n'
);

let sumTotalAnios = animalesVenenosos.reduce(
  (acumulador, animalVenenoso) => acumulador + animalVenenoso.longevidadAnios,
  0
);

console.log(sumTotalAnios / animalesVenenosos.length);
