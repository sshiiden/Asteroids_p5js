/**
 * Describes a ship that the player can control
 * @author Nicholas Santos Shiden
 * @date 23-04-2023
 */
class Ship extends SpaceObject {
    /**
     * Create a playable ship
     * @param {Vector2} position
     * @param {Number} size
     */
    constructor(position, size) {
        super(position, size);
        this.type = "PlayerShip";

        this.points = [
            new Vector2(1.5, 0),
            new Vector2(-1, -1),
            new Vector2(-0.5, -0.5),
            new Vector2(-0.5, 0),
            new Vector2(-0.5, 0.5),
            new Vector2(-1, 1)
        ];

        this.ANGOLAR_VELOCITY = 0.1;
        this.canShoot = true;
        this.thrust = 0.3;
        this.drag = 0.05;
        this.acceleration = new Vector2();
        this.velocity = new Vector2();
    }
    /**
     * Updates the ship and checks for input
     */
    update() {
        super.update();
        this.velocity = this.velocity.add(this.velocity.normalized().multiply(-this.drag));
        this.input();
    }
    /**
     * Checks for input and reacts accordingly
     */
    input() {
        if(keyIsDown(32) && this.canShoot) { // 32 = Space bar code
            new Lazer(this.getPointPosition(this.points[0]), 10, this.rotation);
            this.canShoot = false;
        } else if(!keyIsDown(32) && !this.canShoot) {
            this.canShoot = true;
        }

        if(keyIsDown(UP_ARROW)) {
            this.acceleration = Vector2.fromAngle(this.rotation).multiply(this.thrust);
            this.velocity = this.velocity.add(this.acceleration);
            this.points[3].x = -1.5;
        } else {
            this.points[3].x = -0.5;
        }

        if(keyIsDown(LEFT_ARROW)) {
            this.angolarVelocity = -this.ANGOLAR_VELOCITY;
            this.points[3].y = -0.5;
        } else if(keyIsDown(RIGHT_ARROW)) {
            this.angolarVelocity = this.ANGOLAR_VELOCITY;
            this.points[3].y = 0.5;
        } else {
            this.angolarVelocity = 0;
            this.points[3].y = 0;
        }
    }
}