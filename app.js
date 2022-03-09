// get the box

let box = document.getElementById('box')
let container = document.getElementById('container')
let initX = 0,
  initY = 0,
  newX,
  newY

const handleClick = (e) => {
  console.log(e)
}

const changeBoxPosition = (posX, posY) => {
  box.style.left = posX + 'px'
  box.style.top = posY + 'px'
}

const HandleMouseBtn = (e) => {
  console.log(e)
  e.type === 'mouseup' ? changeBoxPosition(e.clientX, e.clientY) : ''
}

// box.addEventListener('click', (e) => handleClick(e))
// container.addEventListener('click', (e) => handleClick(e))
container.addEventListener('mousedown', (e) => HandleMouseBtn(e))
container.addEventListener('mouseup', (e) => HandleMouseBtn(e))
