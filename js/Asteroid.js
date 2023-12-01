/**
 * Describes an asteroid
 * @author Nicholas Santos Shiden
 * @date 23-04-2023
 */

class Asteroid extends SpaceObject {
    /**
     * Generate an asteroid
     * @param {Vector2} position
     * @param {Number} size
     */
    constructor(position, size, npoints) {
        super(position, size);
        this.type = "Asteroid";

        for (let i = 0; i < npoints; i++) {
            let angle = (Math.PI*2 / npoints) * i;
            this.points[i] = Vector2.fromAngle(angle).multiply(MyMath.randRange(0.5, 2));
        }

        const MAX_ANGOLAR_VELOCITY = 0.05;

        this.thrust = 2;
        this.rotation = MyMath.randRange(0, Math.PI * 2);
        this.angolarVelocity = MyMath.randRange(-MAX_ANGOLAR_VELOCITY, MAX_ANGOLAR_VELOCITY);
        this.velocity = Vector2.fromAngle(this.rotation).multiply(this.thrust);
    }
    /**
     * destroys the asteroid creating two smaller asteroids
     */
    destroy() {
        if (this.points.length > 6)
            for (let i = 0; i < 2; i++) {
                let point = this.points[i];
                point = this.getPointPosition(point);
                let child = new Asteroid(point, this.size * 0.5, this.points.length - 3);
                child.velocity = child.velocity.multiply(2);
            }
        this.clear();
    }
}