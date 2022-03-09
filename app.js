// get the box

let box = document.getElementById('box')
let container = document.getElementById('container')
let initX = 0,
  initY = 0,
  newX,
  newY

let moveActive = false

const handleClick = (e) => {}

const changeBoxPosition = (name, posX, posY) => {
  console.log(name)
  document.getElementById(name).style.left = posX + 'px'
  document.getElementById(name).style.top = posY + 'px'

  //   moveActive = false
}

const HandleMouseBtn = (e) => {
  console.log(e.target.id, moveActive)
  e.preventDefault
  let targetId = e.target.id
  if (e.target.id != 'container') {
    e.type === 'mousedown' && !moveActive ? (moveActive = true) : null
    //   e.type === 'click' && moveActive ? (moveActive = false) : null

    e.type === 'mousemove' && moveActive
      ? changeBoxPosition(targetId, e.clientX, e.clientY)
      : ''

    e.type === 'mouseup' && moveActive ? (moveActive = false) : null
  } else return (moveActive = false)
}

// box.addEventListener('click', (e) => handleClick(e))
// container.addEventListener('click', (e) => handleClick(e))
container.addEventListener('mousedown', (e) => HandleMouseBtn(e))
container.addEventListener('mouseup', (e) => HandleMouseBtn(e))
container.addEventListener('mousemove', (e) => HandleMouseBtn(e))
