/* Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/
const pantalla = document.getElementById("pantalla") || document.body;
const filas = parseInt(prompt("Ingrese el número de filas deseado:"));
const columnas = parseInt(prompt("Ingrese el número de columnas deseado:"));

if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
  alert("Por favor ingresa filas y columnas válidas mayores que cero.");
} else {
  let celdas = filas * columnas;
  let tabla = `<table class="table table-striped" border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; text-align: center;">
    <tbody>`;

  for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
    tabla += "<tr>";
    for (let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++) {
      tabla += `<td>${celdas--}</td>`;
    }
    tabla += "</tr>";
  }

  tabla += "</tbody></table>";
  pantalla.innerHTML = tabla;
}
