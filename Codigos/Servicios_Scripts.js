function cambiarImagen(n_boton) {
    /*Ocultar imagen default*/ 
    var Espera = document.getElementById("Pantalla-espera");
    Espera.style.display = "none";
    /*Seleccionar coleccion*/ 
    var imagen1 = document.getElementById('img1');
    var imagen2 = document.getElementById('img2');
    var imagen3 = document.getElementById('img3');
    var imagen4 = document.getElementById('img4');
    var Ruta = '../Imagenes/Servicios/'

    switch(n_boton){
        case 1:
            Ruta += "Antiguos/"
        break;
        case 2:
            Ruta += "Minimalistas/"
        break;
        case 3:
            Ruta += "Modernos/"
        break;
        case 4:
            Ruta += "Luis 15/"
        break;
        case 5:
            Ruta += "Contemporáneos/"
        break;
        case 6:
            Ruta += "Europeos/"
        break;
        case 7:
            Ruta += "Italianos/"
        break;
        case 8:
            Ruta += "Españoles/"
        break;
        case 9:
            Ruta += "Mexicanos/"
        break;
    }
    
    imagen1.src = Ruta + "Imagen1.png";
    imagen2.src = Ruta + "Imagen2.png";
    imagen3.src = Ruta + "Imagen3.png";
    imagen4.src = Ruta + "Imagen4.png";
}