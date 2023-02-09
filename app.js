function greet() {
  console.log("Hello");
}

let logGreetingII = (miParametro) => miParametro();
logGreetingII(greet);

let logGreetingIII = (miParametro) => miParametro(); //Es una variable que recive una funcion que recive una funcion y la invoca (Funciones creadas al vuelo)
logGreetingIII(function () {
  console.log(`Hello from a function created on the fly`);
});

const color = "rojo";
const talla = "M";
const modelo = "Calsico";
console.log(
  `Juan tiene una playera talla ${talla} de color ${color} modelo ${modelo}`
);
