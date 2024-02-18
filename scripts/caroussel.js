let slideIndex = 0
const cards = document.querySelector('.projects-section__cards')
const slidesContainer = document.querySelector(
  '.projects-section__cards-container'
)

function showSlides() {
  cardWidth = cards.offsetWidth
  slidesContainer.style.transform = `translateX(${-slideIndex * cardWidth}px)`
}

function nextSlide() {
  const slidesContainer = document.querySelector(
    '.projects-section__cards-container'
  )

  if (slideIndex >= 4) {
    slideIndex = 0
    showSlides()
    return
  }

  if (slideIndex < slidesContainer.children.length - 3) {
    slideIndex++
    showSlides()
  }
}

function prevSlide() {
  if (slideIndex >= 0 || slideIndex == -1) {
    slideIndex--
    if (slideIndex < 0) {
      slideIndex = 4
    }
    showSlides()
  }
}

// Ajustar directamente la posición inicial de slideIndex
slideIndex = 0
showSlides()

// Ajustar las slides segun el boton presionado
const buttons = document.querySelectorAll('.projects-section__buttons')
const grayScreen = document.getElementById('grayScreen')
const allCards = document.querySelectorAll('.projects-section__cards')

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slideIndex = index - 1
    allCards[index].classList.add('imageSelected')
    grayScreen.classList.add('gray-screen')
    setTimeout(() => {
      grayScreen.classList.remove('gray-screen')
      allCards[index].classList.remove('imageSelected')
    }, 1000)
    showSlides()
  })
})

// Click para mas info

const closeInfo = document.querySelectorAll('.close-info')
const images = document.querySelectorAll('.projects-section__img')

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    allCards[index].classList.add('rotateY')
  })
})

closeInfo.forEach((closeButton, index) => {
  closeButton.addEventListener('click', () => {
    allCards[index].classList.remove('rotateY')
  })
})
