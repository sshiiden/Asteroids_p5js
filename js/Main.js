/**
 * Asteroids clone made in JavaScript using P5.js
 * @author Nicholas Santos Shiden
 * @date 23-04-2023
 */
function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create player ship
    new Ship(new Vector2(windowWidth/2, windowHeight/2), 15);
    // Create eight asteroids
    for(let i = 0; i < 8; i++) {
        new Asteroid(randPointOutside(0, 0, width, height), 40, 12);
    }
}
function randPointOutside(startX, startY, endX, endY) {
    let x, y;
    let n = Math.random();
    if(n > 0.5) {
        x = int(n*10)%2 ? MyMath.randRange(0, startX) : MyMath.randRange(endX, width);
        y = MyMath.randRange(0, height);
    } else {
        x = MyMath.randRange(0, width);
        y = int(n*10)%2 ? MyMath.randRange(0, startY) : MyMath.randRange(endY, height);
    }
    return new Vector2(x, y);
}
function draw() {
    background(0)
    SpaceObject.process();
}