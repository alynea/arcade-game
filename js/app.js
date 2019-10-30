function setSpeed(bug){
    bug.speed = randomSpeed();
    
}

function randomSpeed() {
    var x = Math.floor((Math.random() * 200)+ 30);
     return x
  }
  
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    if (this.x < window.canvasWidth){
        if (dt != 0){
            this.x =  this.x + (this.speed * dt);
        }        
    } else{
        this.x = 0;
    }
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


let bug1 = new Enemy();
bug1.x = 10;
bug1.y = 50;


let bug2 = new Enemy();
bug2.x = 100;
bug2.y = 125;


let bug3 = new Enemy();
bug3.x = 40;
bug3.y = 175;


let bug4 = new Enemy();
bug4.x = 100;
bug4.y = 225;


setInterval(setSpeed(bug1),500);
setInterval(setSpeed(bug2),1000);
setInterval(setSpeed(bug3),2000);
setInterval(setSpeed(bug4),1500);


let allEnemies = [];

allEnemies.push(bug1, bug2, bug3, bug4);
window.allEnemies = allEnemies;
// Now write your own player class
// This class requires an updßate(), render() and
// a handleInput() method.
var Player= function (){
    this.sprite = 'images/char-boy.png'
}

Player.prototype.update = function(dt){

};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(keyPress){
    if (keyPress == "left" && this.x != 0){
        this.x -= 100;       
    }
    if (keyPress == "right" && this.x <= 300){
        this.x +=100;
    }
    if (keyPress== "up" && this.y != 0){
        this.y -= 100;
    }
    if (keyPress== "down" && this.y <= 300){
        this.y += 100;
    }

};

let player = new Player();
player.x = 0;
player.y = 400;
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

