/**
 * Describes a lazer
 * @author Nicholas Santos Shiden
 * @date 23-04-2023
 */
class Lazer extends SpaceObject {
    /**
     * Creates a lazer
     * @param {Vector2} position
     * @param {Number} size
     * @param {Number} rotation
     */
    constructor(position, size, rotation) {
        super(position, size);
        this.type = "Lazer";

        this.points = [
            new Vector2(0, 0)
        ];
        this.strokeWeight = 4;

        this.thrust = 15;
        this.rotation = rotation;
        this.velocity = Vector2.fromAngle(this.rotation).multiply(this.thrust);
        this.timer = new Timer(2);
    }
    update() {
        super.update();
        let obj = this.checkCollisions();
        if(obj.type == "Asteroid") {
            obj.destroy();
            this.clear();
        }
        if(this.timer.isTimeout()) {
            this.clear();
        }
    }
}