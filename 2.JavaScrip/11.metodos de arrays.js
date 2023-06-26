let claseDev = ["Javier", "Mercedes", "David", "Manuel", "Amadou"];

console.log(claseDev);
//Métodos que MODIFICAN el array

//pop -> Elimina el último elemento del array
claseDev.pop(); // elimina a Amadu
console.log(claseDev);
//push -> Inserta un/varios elemento/s en la última posición del array
claseDev.push("Sabrina");// inserta el/los elementos que le pasemos en el uyltimo elemnto , lño coloca al final del array 1 o los que sean.
console.log(claseDev);
//reverse -> Le da la vuelta al array
claseDev.reverse();// cambia el orden de los elementos el array
console.log(claseDev);
//shift -> Elimina el primer elemento de un array
claseDev.shift();// elimina el primero igual que el pop pero el primero
console.log(claseDev);
//unshift -> Inserta elementos en la primera posición de un array
claseDev.unshift("Sabrina", "Gonzalo", "Mauricio");// push igual pero por el principio
console.log(claseDev);
//sort -> Ordena por orden alfabetico los elementos de un array
claseDev.sort();// ordena por orden alfabetico
console.log(claseDev);
//splice -> Elimina una porción de nuestro array y, opcionalmente, inserta elemento/s en su lugar
 claseDev.splice(2, 2, "Oscar");//que elimina una porcion del array, con poisicion, cuantos elementos a borrar, que voy a poner enn ese agujero y planto lo que he borrado.
console.log(claseDev);

//Métodos que NO modifican el array original
let nuevosAlumnos = ["Pepito", "Fulanito", "Menganito"];
//concat -> Concatenar un array con otro
let newCursoDev = claseDev.concat(nuevosAlumnos)//JUNTA los elentos de dos arrays(los suma)
console.log(newCursoDev);
console.log(claseDev);
//join -> Convierte un array en string y como argumento recibe el caracter separador de elementos
let newCursoDevWithJoin = newCursoDev.join(", ");// lo convierte en un strin con comas en medio yn elimina comillas
console.log(newCursoDevWithJoin);
//slice -> Sirve para recuperar una porción de nuestro array, y funciona a través de posiciones
let seleccionClase = newCursoDev.slice(1, 5);//coge un trozo segun se le indique, a la derecha del corte y saca una porcion del array
console.log(seleccionClase);
//Asi averiguamos el último elemento de un array
console.log(seleccionClase[seleccionClase.length - 1]);
//indexOf -> Encuentra la posición de un elemento en un array desde el principio
console.log(seleccionClase.indexOf("Mauricio"));// quiero pasarle un elemento del array , localiza la posicion Mauricio busca desde el principio
//lastIndexOf  -> Encuentra la posición de un elemento en un array desde el final
console.log(seleccionClase.lastIndexOf("Antonio"));//busca desde el final( si no encuentra lo que buscamos nos da -1)
//includes -> Nos devuelve un booleano si encuentra o no un elemento
console.log(seleccionClase.includes("Mauricio"));// busca el valor booleano True esta y si n0o esta false
console.log(seleccionClase.includes("Antonio"));// busca el valor booleano True esta y si n0o esta false

//Combo
//Vamos a eliminar a Mauricio de la clase
let mauricioPos = seleccionClase.indexOf("Mauricio");
seleccionClase.splice(mauricioPos, 1);
console.log(seleccionClase);