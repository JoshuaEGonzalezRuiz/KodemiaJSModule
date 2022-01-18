console.log("Práctica Clase 10 - Funciones constructoras\n");

//Creamos un objeto a través de una función que se encarga de construir nuestro objeto

/*function Car() {
  this.name = "Chevrolet Aveo";
  this.version = "LS TM";
  this.year = 2022;
  this.fuel = "gasoline";
  this.horsepower = "107 HP";
  this.price = 249,900.00;
}

let car = new Car();

console.log(car);*/

//Creamos objetos a través de una función pasándole los parámetros que necesita para construirlos

/*function Car(car_name, car_version, car_year, car_fuel, car_horsePower, car_price) {
  this.name = car_name;
  this.version = car_version;
  this.year = car_year;
  this.fuel = car_fuel;
  this.horsepower = car_horsePower;
  this.price = car_price;
}

let carOne = new Car("Chevrolet Aveo", "LS TM", 2022, "gasoline", "107 HP",249900);
let carTwo = new Car("Chevrolet Onix", "LS", 2022, "gasoline", "130 HP", 294400);

console.log(carOne.name); //Accedemos a una propiedad de esta forma
console.log(carTwo.name);*/

//Creamos objetos a través la misma función pero en este caso usamos una función propiedad para obtener los datos en cierto sentido

/*function Car(car_name, car_version, car_year, car_fuel, car_horsePower, car_price) {
  this.name = car_name;
  this.version = car_version;
  this.year = car_year;
  this.fuel = car_fuel;
  this.horsePower = car_horsePower;
  this.price = car_price;

  this.showCar = () => {
    return "El carro seleccionado es el " + this.name + " año " + this.year + " en su versión " + this.version + " con " + this.horsePower + " cuyo precio es de " + this.price;
  }
}

let carOne = new Car("Chevrolet Aveo", "LS TM", 2022, "gasoline", "107 HP",249900);
let carTwo = new Car("Chevrolet Onix", "LS", 2022, "gasoline", "130 HP", 294400);

console.log(carOne.showCar()); //Accedemos a una función propiedad de esta forma
console.log(carTwo.showCar());*/

//Añadimos una propiedad nueva a algún objeto creado

/*function Car(car_name, car_version, car_year, car_fuel, car_horsePower, car_price) {
  this.name = car_name;
  this.version = car_version;
  this.year = car_year;
  this.fuel = car_fuel;
  this.horsePower = car_horsePower;
  this.price = car_price;

  this.showCar = () => {
    return "El carro seleccionado es el " + this.name + " año " + this.year + " en su versión " + this.version + " con " + this.horsePower + " cuyo precio es de " + this.price;
  }
}

let carOne = new Car("Chevrolet Aveo", "LS TM", 2022, "gasoline", "107 HP",249900);
let carTwo = new Car("Chevrolet Onix", "LS", 2022, "gasoline", "130 HP", 294400);

carOne.motor = "1.5L"; //Solo se agregará a el objeto indicado

console.log(carOne);

console.log(carTwo);*/

//Utilizamos "prototype" para añadir una propiedad nueva de forma general

/*function Car(car_name, car_version, car_year, car_fuel, car_horsePower, car_price) {
  this.name = car_name;
  this.version = car_version;
  this.year = car_year;
  this.fuel = car_fuel;
  this.horsePower = car_horsePower;
  this.price = car_price;

  this.showCar = () => {
    return "El carro seleccionado es el " + this.name + " año " + this.year + " en su versión " + this.version + " con " + this.horsePower + " cuyo precio es de " + this.price;
  }
}

let carOne = new Car("Chevrolet Aveo", "LS TM", 2022, "gasoline", "107 HP",249900);
let carTwo = new Car("Chevrolet Onix", "LS", 2022, "gasoline", "130 HP", 294400);

Car.prototype.motor = "1.5L"; //Se añade la propiedad motor

console.log(carOne.motor);

console.log(carTwo.motor);

Car.prototype = {motor: "2.5L"}; //Se le cambia el valor a la propiedad motor

console.log(carOne.motor);

console.log(carTwo.motor);

let carThree = new Car("Chevrolet Onix", "LS", 2022, "gasoline", "130 HP", 294400);

console.log(carThree.motor); //Vemos que solo afecta el cambio al nuevo objeto */
