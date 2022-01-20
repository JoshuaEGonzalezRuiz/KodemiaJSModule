console.log("Práctica Clase 11 - Getters y setters\n");

const auto = {
  name: "Chevrolet Aveo",
  version: "LS TM",
  year: 2022,
  fuel: "gasoline",
  horsePower: "107 HP",
  price: 249900,

  get obtainNewPrice() {
    let newPrice = this.price - this.price * 0.1;
    return newPrice;
  },

  set setNewHorsePower(hp) {
    this.horsePower = hp;
  },
};

//console.log(auto.obtainNewPrice);

//auto.setNewHorsePower = "110 HP";

//console.log(auto.horsePower);

function Car() {
  this.name = "Chevrolet Aveo";
  this.version = "LS TM";
  this.year = 2022;
  this.fuel = "gasoline";
  this.horsePower = "107 HP";
  this.price = 249900;

  Object.defineProperty(this, "obtainNewPrice", {
    get() {
      let newPrice = this.price - this.price * 0.1;
      return newPrice;
    },
  });

  Object.defineProperty(this, "setNewHorsePower", {
    set(hp) {
      this.horsePower = hp;
    },
  });
}

let car = new Car();

//console.log(car.obtainNewPrice);

car.setNewHorsePower = "110 HP";

console.log(car.horsePower);
