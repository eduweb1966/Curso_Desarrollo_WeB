//recuperamos el boton
const themeBtn = document.querySelector("#theme-btn")
themeBtn.addEventListener("click", ()=>{
    // cada vez que hacemos click altrnamos la clase dark, si no tiene el body
    
document.body.classList.toggle("dark");
if(document.body.classList.contains("dark")){
    themeBtn.id ="🌞";

}else{
    themeBtn.id ="🌑";   
}
});
// recuperamos el boton de more
const main = document.querySelector("main")
//recuperamos el boton more
const more-btn = document.querySelector("#more-btn")
// cuandfo hagamos cvlick en el bot on more...
themeBtn.addEventListener("click", ()=>{

const para = document.querySelector("main")
 })
