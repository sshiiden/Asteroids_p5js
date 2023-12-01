/**
 * Describes a 2D vector
 * @author Nicholas Santos Shiden
 * @date 23-04-2023
 */
class Vector2 {
    /**
     * Creates a vector
     * @param {Number} x
     * @param {Number} y
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    /**
     * Create a random unit vector
     * @returns The randomized vector
     */
    static random() {
        return Vector2.fromAngle(MyMath.randRange(0, Math.PI*2));
    }
    /**
     * Creates a unit vector rotated to the given angle in radians
     * @param {Number} angle
     * @returns The rotated unit vector
     */
    static fromAngle(angle) {
        return new Vector2(Math.cos(angle), Math.sin(angle));
    }
    /**
     * Sums the vector by a value
     * @param {Number} value
     * @returns The vector summed by value
     */
    add(value) {
        return new Vector2(this.x + value, this.y + value);
    }
    /**
     * Sums the vector by another vector
     * @param {Vector2} vector
     * @returns The vector summed by vector
     */
    add(vector) {
        return new Vector2(this.x + vector.x, this.y + vector.y);
    }
    /**
     * Multiplies the vector by a value
     * @param {Number} value
     * @returns The vector multiplied by value
     */
    multiply(value) {
        return new Vector2(this.x * value, this.y * value);
    }
    /**
     * Rotates the vector by a given angle in radiants
     * @param {Number} angle
     * @returns The rotated vector
     */
    rotated(angle) {
        let x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        let y = this.y * Math.cos(angle) + this.x * Math.sin(angle);
        return new Vector2(x, y);
    }
    /**
     * distance from origin
     * @returns the lenght of the vector
     */
    length() {
        return this.distanceTo(new Vector2());
    }
    /**
     * normalizes the vector
     * @returns normalized vector
     */
    normalized() {
        if(this.length() == 0) return Vector2.fromAngle(0);
        return new Vector2(this.x/this.length(), this.y/this.length());
    }
    /**
     * Uses the pythagorean theorem to find the distance between the vectors
     * @param {Vector2} vector
     * @returns distance between the vectors
     */
    distanceTo(vector) {
        let dx = this.x - vector.x;
        let dy = this.y - vector.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}