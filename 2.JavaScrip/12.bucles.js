
// Bucles
for(let i=0; i < 5; i++ ){
    console.log("hola",i);
}
// para que se utiliza un bucle
// recorriendo un array

const movies =["Batman", "Terminator", "Bambi", "Matrix"];

for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    console.log(movie);
}
//movies.length = 4
// ejecutamos el fichero .....y arranca el bucle
// 1º vuelta  ---> i = i si es menor que movies.length
//para la siguiente vuelta++
//const movie = movies[0] -> Batman
//console.log(movie) ->Batman
//2º vuelta -> i = 1 i si es menor que movie.length
//cont movie = movies[1 = Terminator];
//console.log(movie) -> (Terminsator)
//para la SIGUIENTE VUELTA ++
//3º vuelta -> i = 2 i si es menor que movie.length
//console.log(movie) -> ("Bambi")
//para la siguiente vuelta++
 //4º vuelta -> i = 3 i si es menor que movie.length
//console.log(movie) -> ("Matrix")
//para la siguiente vuelta++
//5º vuelta -> i = 4 i no es menor que movie.length
// se rompe el bucle 


for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Hola, soy cinco");
    }else{
     console.log(i);
    }
}

let numberList = [1,2,3,4,7,8,10,13];
for (let index = 0; index < numberList.length; index++) {
if(numberList[index] === 13) {
console.log('Dicen que da mala suerte 👹')
}
}