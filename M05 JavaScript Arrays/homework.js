/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return (array[0]);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];

}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var mas1 = [];
   for (var i = 0 ; i < array.length ; i++) {
      mas1.push(array[i] + 1);
   }
   return mas1;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push (elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift (elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var correccion = palabras.join(" ");
   return correccion;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var i = 0
   result = false
   do {
      if (array[i] === elemento) {
         result = true;
      }
      i = (i + 1)
   } while (i === array.length)
   return result;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;
   var i = 0;
   do {
      suma = suma + arrayOfNums[i];
      i = i + 1;
   } while (i !== arrayOfNums.length);
   return suma
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;
   var i = 0;
   do {
      suma = suma + resultadosTest[i];
      i = i + 1;
   } while (i !== resultadosTest.length);
   return suma / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var mayor = 0;
   var i = 0;
   do {
      if (arrayOfNums[i] > mayor) {
         mayor = arrayOfNums[i];
      }
      i = i + 1
   } while (i < arrayOfNums.length);
   return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var mult = 1;
   var i = 0;
   do {
      if (arguments.length === 0) {
         mult = 0;
      } else if (arguments.length === 1) {
         mult = arguments[i];
      } else if (arguments.length > 1) {
         mult = (mult * arguments[i]);
      }
      i = i + 1
   } while (i < arguments.length);
   return mult;
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var i = 0;
   var cantidad = 0
   do {
      if (array[i] > 18) {
         cantidad = cantidad + 1 ;
      }
      i = i + 1
   } while (i < array.length);
   return cantidad;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   } else {
      return "Es dia laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var check = String(num);
   var check2 = check.split("");
   if (check2[0] === "9") {
      return true;
   } else {
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var igual = true
   var i = 0
   do {
      if (array[i] !== array[0]) {
         igual = false;
         break;
      }
      i = i + 1;
   } while (i < array.length);
   return igual
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arreglo = [];
   var i = 0;
   do {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
         arreglo.push(array[i]);
      }
      i = i + 1;
   } while (i < array.length);
   if (!arreglo.includes("Enero") || !arreglo.includes("Marzo") || !arreglo.includes("Noviembre")) {
      return ("No se encontraron los meses pedidos");
   } else {
      return arreglo;
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var i = 0
   var result = []
   do {
      result.push(6 * i);
      i++
   } while (i < 11);
   return (result);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var returnn = [];
   var i = 0;
   do {
      if (array[i] > 100) {
         returnn.push(array[i]);
      }
      i = i + 1;
   } while (i < array.length);
   return returnn;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var rr = [];
   var i = 0;
   var crazy = num;
   do {
      if ((crazy + 2) === 2) {
         rr = "Se interrumpió la ejecución"
         break;
      } else {
         crazy = crazy + 2;
         rr.push(crazy)
         i++
      }
   } while (i < 10)
   return rr
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var rr = [];
   var i = 0;
   var crazy = num;
   do {
      if (i === 5) {
         i++
         continue;
      } else {
         crazy = crazy + 2;
         rr.push(crazy)
         i++
      }
   } while (i < 10)
   return rr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
