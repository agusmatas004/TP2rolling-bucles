/* Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente 
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el 
mensaje “Introduce un número válido */

let continuar = true;

while (continuar) {
    let entrada = prompt("Introduce una nota del 0 al 10 (o escribe 'salir' para terminar):");

    // Condición para romper el bucle y salir
    if (entrada === null || entrada.toLowerCase() === "salir") {
        alert("¡Programa terminado!");
        continuar = false; 
    } else if (entrada.trim() === "" || isNaN(entrada)) {
        alert("Introduce un número válido");
    } else {
        let nota = Number(entrada);

        if (nota < 0 || nota > 10) {
            alert("Número erróneo");
        } else {
            if (nota >= 0 && nota <= 2) {
                alert("Muy deficiente");
            } else if (nota >= 3 && nota <= 4) {
                alert("Insuficiente");
            } else if (nota >= 5 && nota <= 6) {
                alert("Suficiente");
            } else if (nota > 6 && nota <= 7) {
                alert("Bien");
            } else if (nota > 7 && nota <= 9) {
                alert("Notable");
            } else if (nota > 9 && nota <= 10) {
                alert("Sobresaliente");
            }
        }
    }
}