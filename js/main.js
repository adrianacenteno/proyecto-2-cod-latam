const menuInicio = document.querySelectorAll(".menudeinicio")

menuInicio.forEach(function(item){
    item.addEventListener("click", function(evento){
    const activeItem = document.querySelector(".active");
    activeItem.classList.remove("active");
    evento.target.classList.add("active");
})}); 


    /*boton contenido oculto*/



const botonMostrar = document.querySelector('.mostrarMas');
const contenidoOculto = document.querySelector('#contenido-oculto');
    
botonMostrar.addEventListener("click", function() {
    contenidoOculto.classList.toggle("visible");
 }); 


    /* modo nocturno*/

    const botonModoNocturno = document.querySelector('.modo-nocturno');
    const body = document.querySelector("body");
    const encabezado = document.querySelector("nav");
    
    
    botonModoNocturno.addEventListener("click", function () {
        body.classList.toggle("modo-nocturno");
        encabezado.classList.toggle("modo-nocturno");
       
    });
    
    
    
    
    