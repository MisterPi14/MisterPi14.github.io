// URL de la API
const url = 'https://places.googleapis.com/v1/places/ChIJTz2pFvn-0YURsjFPGhe2e1Y';

// Opciones de la solicitud
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': 'AIzaSyD860BdiMFrPA97q5yVY5YxRMgrogaMz_s', // Reemplaza 'APIKEY' con tu clave de API real
    'X-Goog-FieldMask': 'reviews.originalText.text,reviews.authorAttribution.displayName,reviews.rating,reviews.publishTime'
  }
};

function numEstrellas(rating) {
  switch (rating) {
    case 1:
      return '⭐★★★★';
    case 2:
      return '⭐⭐★★★';
    case 3:
      return '⭐⭐⭐★★';
    case 4:
      return '⭐⭐⭐⭐★';
    case 5:
      return '⭐⭐⭐⭐⭐';
    default:
      return '';
  }
}

// Realiza la solicitud
fetch(url, options)
  .then(response => response.json())
  .then(data => {
    // Manipula el DOM para mostrar los resultados
    const reviewsContainer = document.getElementById('Reseñas-container');
    data.reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.innerHTML = `
        <P class="nombre-usuario">${review.authorAttribution.displayName}</P>
        <br>
        <p>${review.originalText.text}</p>
        <br>
        <p>Satisfaccion del cliente: ${numEstrellas(review.rating)}</p>
        <br>
        <p class="fecha-publicacion"> Reseña del ${new Date(review.publishTime).toLocaleString()}</p>
      `;
      reviewsContainer.appendChild(reviewElement);
    });
  })
  .catch(error => console.error('Error:', error));
