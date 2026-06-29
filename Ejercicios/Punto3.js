//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
let resultado = "";
let texto;

do {
  texto = prompt("Ingrese un texto");
  if (texto !== null) {
    if (resultado !== "") resultado += " - ";
    resultado += texto;
  }
} while (texto !== null);

alert(resultado);