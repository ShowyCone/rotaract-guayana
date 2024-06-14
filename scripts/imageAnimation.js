// Definir las opciones del observador
let options = {
  root: null, // se refiere al viewport
  rootMargin: '0px',
  threshold: 0.1, // 10% del elemento en el viewport
}

// Crear el observador
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // Verificar si el elemento está entrando en el viewport
    if (entry.isIntersecting) {
      // Si es una imagen 'lazy', agregar la animación correspondiente
      if (entry.target.classList.contains('lazy')) {
        entry.target.classList.add('smooth-image')
      }
      // Si es una 'testimonial-card', agregar la animación correspondiente
      if (entry.target.classList.contains('testimonial-card')) {
        entry.target.classList.add('scale-up-animate')
      }
    } else {
      // Remover las clases de animación cuando el elemento sale del viewport
      entry.target.classList.remove('smooth-image')
      entry.target.classList.remove('scale-up-animate')
    }
  })
}, options)

// Observar las imágenes y las cards
document.querySelectorAll('.lazy, .testimonial-card').forEach((element) => {
  observer.observe(element)
})
