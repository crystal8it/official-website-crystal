//@ts-nocheck
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min'

export const useGalaxy = (id: string) => {
  var n_stars = 150
  var colors = ['#176ab6', '#fb9b39']
  for (let i = 0; i < 98; i++) {
    colors.push('#fff')
  }

  var canvas = document.querySelector(`#${id}`)
  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight

  addEventListener('resize', () => {
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight
    stars = []
    init()
  })

  canvas.style.background = '#000'
  var c = canvas.getContext('2d')

  const randomInt = (max, min) => Math.floor(Math.random() * (max - min) + min)

  var bg = c.createRadialGradient(
    canvas.width / 2,
    canvas.height * 3,
    canvas.height,
    canvas.width / 2,
    canvas.height,
    canvas.height * 4
  )
  bg.addColorStop(0, '#32465E')
  bg.addColorStop(0.4, '#000814')
  bg.addColorStop(0.8, '#000814')
  bg.addColorStop(1, '#000')

  class Star {
    constructor(x, y, radius, color) {
      this.x = x || randomInt(0, canvas.width)
      this.y = y || randomInt(0, canvas.height)
      this.radius = radius || Math.random() * 1.1
      this.color = color || colors[randomInt(0, colors.length)]
      this.dy = -Math.random() * 0.3
    }
    draw() {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      c.shadowBlur = randomInt(3, 15)
      c.shadowColor = this.color
      c.strokeStyle = this.color
      c.fillStyle = 'rgba( 255, 255, 255, .5)'
      c.fill()
      c.stroke()
      c.closePath()
    }
    update(arrayStars = []) {
      if (this.y - this.radius < 0) this.createNewStar(arrayStars)

      this.y += this.dy
      this.draw()
    }
    createNewStar(arrayStars = []) {
      let i = arrayStars.indexOf(this)
      arrayStars.splice(i, 1)
      arrayStars.push(new Star(false, canvas.height + 5))
    }
  }
  var stars = []
  function init() {
    for (let i = 0; i < n_stars; i++) {
      stars.push(new Star())
    }
  }
  init()

  function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = bg
    c.fillRect(0, 0, canvas.width, canvas.height)
    stars.forEach((s) => s.update(stars))
  }
  animate()
}

export const useFog = (id: string) => {
  const clientEl = document.querySelector(`#${id}`)

  const clientRect = {
    height: clientEl.clientHeight - 50,
    width: clientEl.clientWidth
  }

  return FOG({
    el: `#${id}`,
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: clientRect.height,
    highlightColor: 0x4a6789,
    midtoneColor: 0x576a8e,
    lowlightColor: 0x544c7f,
    baseColor: 0x1e1e5c,
    blurFactor: 0.9,
    speed: 5,
    zoom: 1
  })
}
