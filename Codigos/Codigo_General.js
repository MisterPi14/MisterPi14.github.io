
function AbrirNavegadorMobil(){
    var Boton = document.getElementById("Boton-navegador");
    var Navegador = document.getElementById("Barra-Navegacion");
    var Display = window.getComputedStyle(Navegador).getPropertyValue('display');

    if(Display === "none"){
        Boton.textContent = "Ocultar";
        Navegador.style.display = "block";
    }
    else{
        Boton.textContent = "Mostrar";
        Navegador.style.display = "none";
    }
}