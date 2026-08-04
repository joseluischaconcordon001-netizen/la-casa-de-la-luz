document.body.style.background = "red";
const imagenes = [

    "../images/hamadriades/hamadriades-01.jpg",
    "../images/hamadriades/hamadriades-02.jpg",
    "../images/hamadriades/hamadriades-03.jpg",
    "../images/hamadriades/hamadriades-04.jpg"

];

const foto = document.getElementById("foto-activa");

let actual = 0;

foto.src = imagenes[actual];