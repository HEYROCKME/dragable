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
  document.getElementById(target.id).style.left =
    posX - target.clientWidth / 2 + 'px'
  document.getElementById(target.id).style.top =
    posY - target.clientHeight / 2 + 'px'
  console.log(target, posX, posY)
}

const clientPosition = () => {}

const HandleMouseBtn = (e) => {
  e.preventDefault
  let targetId = e.target.id
  if (e.target.id && targetId != 'container') {
    e.type === 'mousedown' && !moveActive ? (moveActive = true) : null

    e.type === 'mousemove' && moveActive
      ? changeBoxPosition(e.target, e.clientX, e.clientY)
      : ''

    e.type === 'mouseup' && moveActive ? (moveActive = false) : null
  } else return (moveActive = false)
}

const HandleOver = (theEventOff) => {
  theEventOff.target.className.includes('movable')
    ? theEventOff.target.classList.add('active')
    : theEventOff.target.classList.remove('active')
}

body.addEventListener('mousedown', (e) => HandleMouseBtn(e))
body.addEventListener('mouseup', (e) => HandleMouseBtn(e))
body.addEventListener('mousemove', (e) => HandleMouseBtn(e))
body.addEventListener('mouseover', (e) => HandleOver(e))
