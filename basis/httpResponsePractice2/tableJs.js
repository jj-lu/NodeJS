const tdArr = document.querySelectorAll('td')
tdArr.forEach(item => {
  item.addEventListener('click', () => {
    item.style.background = 'blue'
  })
})
