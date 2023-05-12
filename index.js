//SETUP
const canvas = document.querySelector('canvas')
const canvasContext = canvas.getContext('2d')

canvas.width = innerWidth  // can also do window.innerWidth
canvas.height = innerHeight

class Player {
    constructor() { //Initialize player size, location, velocity
        this.position = {
            x: 200,
            y: 200
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        const image = new Image()
        image.src = "./assets/img/spaceship.png"

        this.image = image
        this.width = 100
        this.height = 100
    }

    draw() {
        // canvasContext.fillStyle = 'blue'
        // canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height)

        canvasContext.drawImage(this.image, this.position.x, this.position.y)
    }

}

const player = new Player()
player.draw()
animate()

//Currenty we are only calling the spaceship image once and the screen is loaded in before the image is finished loading so we cannot see it.
// Because we want to get the spaceship to move and continue to update it's position, it's going to call itself
function animate (){
    requestAnimationFrame(animate)
    canvasContext.fillStyle = 'black'
    canvasContext.fillRect(0,0, canvas.width, canvas.height)
    player.draw()
}