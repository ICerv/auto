const auto = document.querySelector('#car')
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    car.style.marginLeft = '50px'
  } else if (event.key === 'ArrowLeft') {
    car.style.marginLeft = '0'
  }
})