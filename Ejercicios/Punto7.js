//Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
let numero = prompt("Ingrese un número (no mayor de 50):");
let num = Number(numero);

if (isNaN(num) || num < 1 || num > 50) {
  alert("Error: El valor ingresado no es un número válido.");
} else {
  for (let i = num; i >= 1; i--) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila += i;
    }
    console.log(fila);
  }
}