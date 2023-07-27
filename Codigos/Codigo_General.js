
function Abrir_Ocultar(Contenedor){
    var Boton = document.getElementById("Boton-navegador");
    var Navegador = document.getElementById(Contenedor);
    var Display = window.getComputedStyle(Navegador).getPropertyValue('display');

    if(Display === "none"){
        Navegador.style.display = "block";
        if(Contenedor === "Barra-Navegacion")
        Boton.textContent = "Ocultar";
    }
    else{
        Navegador.style.display = "none";
        if(Contenedor === "Barra-Navegacion")
        Boton.textContent = "Mostrar";
    }
}
