/**
 * autor: Agustin Chumilla
 * version: 1.0
 * fecha: 30/04/24
 * El siguiente script sirve a index.html y genera una
 * función que se llama menú
 * El menú consta de un switch que por recursividad 
 * vuelve a llamarse a si misma
*/

// 1 - Se declara la función menu()
function menu() {
    // 1 - Declaración de variables locales.
    let opc = prompt("Seleccione una opción:\n1. Sumar\n2. Restar\n3. Salir");

    // 2 - Proceso mediante un switch.
    switch (opc) {
        case "1":
            // Inicialización de variable del caso 1.
            let num1 = parseFloat(prompt("Ingrese un número"));
            let num2 = parseFloat(prompt("Ingrese otro número"));
            // Llamamos a sumar y mostramos el resultado 
            alert(sumar(num1, num2));
            // Recursividad para volver a elegir opciones.
            menu();
            break;

        case "2":
            // Inicialización de variable del caso 1.
            let num3 = parseFloat(prompt("Ingrese un número"));
            let num4 = parseFloat(prompt("Ingrese otro número"));
            // Llamamos a sumar y mostramos el resultado 
            alert(restar(num3, num4));
            // Recursividad para volver a elegir opciones.
            menu();
            break;

        case "3":
            alert("Saliendo... Hasta la próxima!");
            exit(0); // Forzamos a salir 
            //break; Ya no es necesario porque sale directo

        default:
            alert("Opción no valida, intente nuevamente");
            // Recursividad
            menu();
            break;
    }
}
