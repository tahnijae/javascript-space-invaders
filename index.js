//SETUP
const canvas = document.querySelector('canvas')
const canvasContext = canvas.getContext('2d')
const spaceshipScale = 0.15

canvas.width = innerWidth  // can also do window.innerWidth
canvas.height = innerHeight

class Player {
    constructor() { //Initialize player size, location, velocity
        this.velocity = {
            x: 0,
            y: 0
        }

        const image = new Image()
        image.src = "./assets/img/spaceship.png"
        image.onload = () => {
            this.image = image
            this.width = image.width * spaceshipScale
            this.height = image.height * spaceshipScale
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 20
            }
        }


    }

    draw() {
        // canvasContext.fillStyle = 'blue'
        // canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height)

        if(this.image){
            canvasContext.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

}

const player = new Player()
player.draw()
animate()

//Currenty we are only calling the spaceship image once and the screen is loaded in before the image is finished loading so we cannot see it.
// Because we want to get the spaceship to move and continue to update it's position, it's going to call itself
function animate() {
    requestAnimationFrame(animate)
    canvasContext.fillStyle = 'black'
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
}