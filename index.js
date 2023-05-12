//SETUP
const canvas = document.querySelector('canvas')
const canvasContext = canvas.getContext('2d')
const spaceshipScale = 0.15
const spaceshipSpeed = 5

canvas.width = innerWidth  // can also do window.innerWidth
canvas.height = innerHeight

class Player {
    constructor() { //Initialize player size, location, velocity
        this.velocity = {
            x: 0,
            y: 0
        }
        this.rotation = 0

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
        canvasContext.save()
        canvasContext.translate(
            player.position.x + player.width / 2 , 
            player.position.y + player.height / 2
            )
        canvasContext.rotate(this.rotation)
        canvasContext.translate(
            -player.position.x - player.width / 2 , 
            -player.position.y - player.height / 2
            )

        canvasContext.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)

        canvasContext.restore()
    }

    update(){
        if(this.image){
            this.draw()
            this.position.x += this.velocity.x
        }
    }
}

const player = new Player()
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    }
}
animate()


//Currenty we are only calling the spaceship image once and the screen is loaded in before the image is finished loading so we cannot see it.
// Because we want to get the spaceship to move and continue to update it's position, it's going to call itself
function animate() {
    requestAnimationFrame(animate)
    canvasContext.fillStyle = 'black'
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)
    player.update()

    if (keys.a.pressed && player.position.x >= 0){
        player.velocity.x = -spaceshipSpeed
        player.rotation = -0.15
    }
    else if(keys.d.pressed && player.position.x + player.width <= canvas.width){
        player.velocity.x = spaceshipSpeed
        player.rotation = 0.15
    }
    else{
        player.velocity.x = 0
        player.rotation = 0
    }
}


//LISTENERS
addEventListener('keydown', ({key}) => {
    switch(key){
        case 'a':
            keys.a.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
        case ' ':
            break
    }
})
addEventListener('keyup', ({key}) => {
    switch(key){
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        case ' ':
            break
    }
})

