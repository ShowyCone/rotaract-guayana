window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header')

  header.classList.toggle('scroll-active', window.scrollY > 0)
})
