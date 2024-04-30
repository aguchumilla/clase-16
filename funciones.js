/**
 * autor: Agustin Chumilla  
 * version: 1.0
 * fecha: 30/04/24
 * El siguiente script sirve a index.html y genera funciones 
 * para calculos aritméticos
 */


// 1- Declaración de funciones con funciones declaradas.
function saludar() {
    alert("Hola mundo!");    
}

// 2 - Llamada de la función
saludar();

// 3 - Declaración de una función parametrica
function saludar2(nombre) {
    //Cuerpo de la función    
    alert("Hola "+nombre+"!");
}

// 4 - Llamada a saludar2
//saludar2("Codo");

// 5 - Funcion sumar() paramétrica y declarada. 
function sumar(num1, num2) {
    // Cuerpo
    // Declaración de variables locales
    let resultado = num1 + num2;
    // Mostramos el resultado
    // alert(resultado);
    // Retorno del resultado
    return resultado;
}
// Llamamos a sumar
let resultado = sumar (90,10);
console.log(sumar(5,6)*8);

// 6 - Función restar() paramétrica y declarada.
function restar(num1,num2) {
    // Variable local
    let resultado = num1 - num2;
    // Valor de retorno
    return resultado;
}

// 7 - Funciones Flecha.
// Otra forma de declarar funciones. Utiliza ambitos de variable y de funciones, resume una función. 

// Forma: Variable = () => {};
const sumarFlecha = (num1,num2)=>{return num1+num2}; 
// Otra forma: const sumarFlecha = (num1,num2)=>num1+num2; SOLO para operaciones que no son complejas (solo 1 renglón).
const restarFlecha = (num1,num2)=>num1-num2;
