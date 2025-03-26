//**/ Tipos de Datos */

//(números, strings, booleanos, arrays, objetos)

//**números*/

let numero = 12; //declaramos la variable y le asiganamos un  valor en este caso un numero 12

console.log(typeof numero); //imprimira el tipo de dato del numero 12 que es un numero

let numero2 = 12.5; //declaramos la variable y le asiganamos un  valor en este caso un numero 12.5

console.log(typeof numero2); //imprimira el tipo de dato del numero 12.5 que es un numero

let numero3 = 12.5e-2; //declaramos la variable y le asiganamos un  valor en este caso un numero 12.5e-2

console.log(typeof numero3); //imprimira el tipo de dato del numero 12.5e-2 que es un numero

let numero4 = 12.5e2; //declaramos la variable y le asiganamos un  valor en este caso un numero 12.5e+2

console.log(typeof numero4); //imprimira el tipo de dato del numero 12.5e+2 que es un numero

//**/String */

let texto = "Curso de JavaScript";

console.log(typeof texto); //imprimira el tipo de dato del texto en este caso nos dice que es una string

//**Boolean */

let verdad = true;
let falso = false;

console.log(typeof verdad); //imprimira el tipo de datos boolean
console.log(typeof falso); //imprimira el tipo de datos boolean

let verdad2 = !falso;

console.log(verdad2); //imprimira el tipo de datos True

let verdad3 = !verdad; //imprimira el tipo de datos False

console.log(verdad3); //imprimira el tipo de datos True

//*/Arrays*/

let arreglo1 = [1, 2, 3, 4, 5, 6, 7];

console.log(Array.isArray(arreglo1)); //imprimira el tipo de dato del arreglo1 que es un arreglo con true

//*Object*/

let object = {
  name: "course",
  year: 2022,
  teacher: "Daniel",
  subject: "JavaScript",
};

console.log(typeof object); //imprimira el tipo de dato del object que es un object

//console.log(object.name); //imprimira el nombre del curso
//console.log(object.year); //imprimira el año del curso
//console.log(object.teacher); //imprimira el profesor del curso
//console.log(object.subject); //imprimira el tema del curso
