//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
// si la edad ingresada no es un número válido indicarlo en un mensaje.

let continuar = true;

while (continuar) {
  const edad = parseInt(prompt("Ingrese la edad"));
  if (isNaN(edad)) {
    console.log("La edad ingresada no es valida");
  } else if (edad >= 18) {
    console.log(edad);
    console.log("Tiene permiso a conducir");
  } else {
    console.log(edad);
    console.log("No tiene permiso a conducir");
  }
  continuar = confirm("¿Quieres ingresar otra edad?");
}