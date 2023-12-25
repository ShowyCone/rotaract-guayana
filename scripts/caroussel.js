let slideIndex = 0

function showSlides() {
  const slidesContainer = document.querySelector(
    '.projects-section__cards-container'
  )
  const cardWidth = document.querySelector(
    '.projects-section__cards'
  ).offsetWidth
  slidesContainer.style.transform = `translateX(${-slideIndex * cardWidth}px)`
}

function nextSlide() {
  const slidesContainer = document.querySelector(
    '.projects-section__cards-container'
  )
  const cardWidth = document.querySelector(
    '.projects-section__cards'
  ).offsetWidth

  if (slideIndex < slidesContainer.children.length - 3) {
    slideIndex++
    showSlides()
  }
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--
    showSlides()
  }
}

// Ajustar directamente la posición inicial de slideIndex
slideIndex = 0
showSlides()
