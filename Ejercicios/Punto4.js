//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let suma = 0;
let numero;

do {
  numero = prompt("Ingrese un número");
  if (numero !== null) {
    let num = Number(numero);
    if (isNaN(num)) {
      alert("Error: El valor ingresado no es un número válido.");
    } else {
      suma += num;
    }
  }
} while (numero !== null);

alert("La suma total de los números introducidos es: " + suma);