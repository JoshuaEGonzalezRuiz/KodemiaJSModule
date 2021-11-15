setHelloWorldText(); //Se ejecuta la función que imprimirá el texto deseado

function setHelloWorldText() {
  var title = document.getElementById("hellowWorld"); //Se obtiene el acceso a las propiedades del elemento deseado

  title.innerHTML = "HOLA MUNDO 😎👌"; //Se añade el texto deseado en el elemento HTML h1

  console.log("HOLA MUNDO 😎👌"); //Se imprime en la consola del navegador el texto deseado
}
