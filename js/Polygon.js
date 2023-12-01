/**
 * Describes a polygon and renders it
 * @author Nicholas Santos Shiden
 * @date 23-04-2023
 */
class Polygon {
    /**
     * Creates a polygon
     * @param {Vector2} position
     * @param {Number} size
     * @param {Number} rotation
     */
    constructor(position = new Vector2(), size = 1, rotation = 0) {
        this.position = position;
        this.rotation = rotation;
        this.size = size;
        this.points = [];
        this.color = 255;
        this.strokeWeight = 2;
    }
    /**
     * bounding radius used for collisions
     * @returns bounding radius
     */
    getBoundingRadius() {
        let radius = 0;
        this.points.forEach(point => {
            let distance = this.position.distanceTo(this.getPointPosition(point));
            if(distance > radius) radius = distance;
        });
        return radius;
    }
    /**
     * Gives the point position on the screen
     * @param {Vector2} point
     * @returns point in the screen
     */
    getPointPosition(point) {
        return point.rotated(this.rotation).multiply(this.size).add(this.position);
    }
    /**
     * Renders the polygon on the screen
     */
    render() {
        stroke(this.color);
        strokeWeight(this.strokeWeight);
        noFill();
        beginShape();
        this.points.forEach(point => {
            point = this.getPointPosition(point);
            vertex(point.x, point.y);
        });
        endShape(CLOSE);
    }
}