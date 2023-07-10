// Spead Operator

const alumnos= ["Gonzalo", " Mauricio","Javier", "David", "Oscar", "Fareh"];
const Alumnas = ["Edith", "Monica"," Isabel", "Sabrina"];

const cursoDesarrollo = [ ...alumnos, ...Alumnas, "Antonio", "Dani"]
console.log(cursoDesarrollo)

//

const stringEsparcido=["Hola"];
console.log(stringEsparcido);

let nuevoArray = [];
    nuevoArray = [...nuevoArray, "Primero"]
    nuevoArray = [...nuevoArray, "Segundo"]
    nuevoArray = [...nuevoArray, "Tercero"]
    console.log(nuevoArray)

    //

    const emojiEsparcido = [..."👩🏾‍🦳"];
    console.log(emojiEsparcido)