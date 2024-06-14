// Definir las opciones del observador
let options = {
  root: null, // se refiere al viewport
  rootMargin: '0px',
  threshold: 0.1, // 10% del elemento en el viewport
}

// Crear el observador
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Agregar la clase que contiene la animación cuando la imagen entra en el viewport
      entry.target.classList.add('smooth-image')
    } else {
      // Remover la clase que contiene la animación cuando la imagen sale del viewport
      entry.target.classList.remove('smooth-image')
    }
  })
}, options)

// Observar las imágenes
document.querySelectorAll('.lazy').forEach((img) => {
  observer.observe(img)
})
