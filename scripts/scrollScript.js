let lastScrollY = 0
const header = document.querySelector('.main-header')
const headerHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY

  if (currentScrollY <= 100) {
    header.classList.remove('scroll-hidden')
    header.classList.add('scroll-active')
  } else if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
    header.classList.remove('scroll-active')
    header.classList.add('scroll-hidden')
  } else {
    header.classList.remove('scroll-hidden')
    header.classList.add('scroll-active')
  }

  lastScrollY = currentScrollY
  header.classList.toggle('scroll-active', currentScrollY > 0)
})
