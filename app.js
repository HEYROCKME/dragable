// get the box

let box = document.getElementById('box')
let container = document.getElementById('container')
let body = document.body
let initX = 0,
  initY = 0,
  newX,
  newY

let moveActive = false

const handleClick = (e) => {}

const changeBoxPosition = (target, posX, posY) => {
  let element = document.getElementById(
    target.parentElement.attributes[0].nodeValue
  )

  element.style.left = `${posX - element.clientWidth / 2}px`
  element.style.top = `${posY - element.clientHeight / 20}px`
  console.log(element)
  console.log('moving: ' + moveActive)
}

const updateCoords = (x, y) => {
  newX = x
  newY = y
  // console.log(newY, newX)
}

const HandleMouseBtn = (e) => {
  e.preventDefault
  e.type === 'mousemove' ? updateCoords(e.clientX, e.clientY) : null

  let targetId = e.target.id
  if (targetId != 'container' && e.target.className == 'movable') {
    e.type === 'mousedown' && !moveActive ? (moveActive = true) : null

    e.type === 'mousemove' && moveActive
      ? changeBoxPosition(e.target, newX, newY)
      : console.log('not Moving')

    e.type === 'mouseup' && moveActive ? (moveActive = false) : null
  } else return (moveActive = false)
}

body.addEventListener('mousedown', (e) => HandleMouseBtn(e))
body.addEventListener('mouseup', (e) => HandleMouseBtn(e))
body.addEventListener('mousemove', (e) => HandleMouseBtn(e))

// body.addEventListener('click', (e) => console.log(e.target))
