const imagenes = [

    "../images/hamadriades/hamadriades-01.jpg",
    "../images/hamadriades/hamadriades-02.jpg",
    "../images/hamadriades/hamadriades-03.jpg"

];

const foto = document.getElementById("foto-activa");

const siguiente = document.querySelector(".next");

let actual = 0;

foto.src = imagenes[actual];

siguiente.addEventListener("click", function(){

    actual++;

    if(actual >= imagenes.length){

        actual = 0;

    }

    foto.src = imagenes[actual];

});