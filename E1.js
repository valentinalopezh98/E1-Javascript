//  E1: Condicionales, Ciclos y Funciones

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function es_par(numero) {
    numero % 2 == 0 ? console.log("Es par") : console.log("Es impar");
}

/* Prueba funcion es_par()
let num = 25;
es_par(num);
*/

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function mayor(numero1, numero2) {
    if (numero1 > numero2){
        console.log(`El mayor es ${numero1}`);
    } else if (numero2 > numero1) {
        console.log(`El mayor es ${numero2}`);
    } else {
        console.log(`Son iguales`);
    }
}

/* Prueba funcion mayor()
let num1 = 15;
let num2 = 15;
mayor(num1,num2);
*/

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDe5(numero){
    numero % 5 == 0? console.log("Es múltiplo de 5") : console.log("No es múltiplo de 5");
}

/* Prueba funcion multiploDe5()
let num3 = 310;
multiploDe5(num3);
*/

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirNumeros(numero){
    for (let i = 0; i <= numero; i++){
        console.log(`${i}`);
    }
}

/* Prueba imprimirNumeros()
let num4 = 14;
imprimirNumeros(num4);
*/

// 5- Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function imprimirPalabra (cadena, numero){
    for (let i = 1; i <= numero; i++){
        console.log(`${cadena}`);
    }
}

/* Prueba imprimirPalabra()
let cadena = "Hola mundo";
let num5 = 6;
imprimirPalabra(cadena, num5);
*/

// 6- Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function imprimirArreglo(arreglo){
    arreglo.forEach(elemento => {
        console.log(elemento);
    });
}

/* Prueba imprimirArreglo()
let array = [1,5,6,4,5,25];
imprimirArreglo(array);
*/

// 7- Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function imprimirArregloInc(arreglo){
    for (let i = 0; i < arreglo.length; i++){
        if (i != 4){
            console.log(`${arreglo[i]}`);
        }
    }
}

/* Prueba imprimirArregloInc() 
let arreglo1 = [1,2,3,4,5,6,7,8,9,10];
imprimirArregloInc(arreglo1);
*/

// 8- Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function numerosMultiplicados (arreglo, numero) {
    for (let i = 0; i < arreglo.length; i++){
        console.log(`${arreglo[i] * numero}`);
    }
}

/* Prueba numerosMultiplicados()
let num6 = 4;
let arreglo2 = [1,2,3,4,5,6,7,8,9,10];
numerosMultiplicados(arreglo2, num6);
*/