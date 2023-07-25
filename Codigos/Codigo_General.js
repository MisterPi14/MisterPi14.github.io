document.getElementById("botonMostrarOcultar").addEventListener("click", function() {
    var contenedor = document.getElementById("contenedorOpciones");
    if (contenedor.style.display === "none") {
      contenedor.style.display = "block";
      this.textContent = "Ocultar Contenedor";
    } else {
      contenedor.style.display = "none";
      this.textContent = "Mostrar Contenedor";
    }
  });
  