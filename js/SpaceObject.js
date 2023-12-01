/**
 * Describes and process space objects
 * @author Nicholas Santos Shiden
 * @date 23-04-2023
 */
class SpaceObject extends Polygon {
    static #spaceObjects = [];

    /**
     * Initialize the object
     * @param {Vector2} position
     * @param {Number} size
     */
    constructor(position, size) {
        super(position, size);

        this.thrust = 0;
        this.angolarVelocity = 0;
        this.acceleration;
        this.velocity;

        this.id = SpaceObject.addObject(this)-1;
        this.type = "SpaceObject";
    }
    /**
     * Adds a new object to the list
     * @param {SpaceObject} object
     * @returns new list lenght
     */
    static addObject(object) {
        return this.#spaceObjects.push(object);
    }
    /**
     * Removes an object from the list
     * @param {Number} id
     */
    static removeObject(id) {
        for(let i = id; i < this.#spaceObjects.length-1; i++) {
            this.#spaceObjects[i] = this.#spaceObjects[i+1];
            this.#spaceObjects[i].id = i;
        }
        this.#spaceObjects.pop();
    }
    /**
     * Updates and renders all space object
     */
    static process() {
        this.#spaceObjects.forEach(object => {
            object.update();
        });
        this.#spaceObjects.forEach(object => {
            object.render();
        });
    }
    /**
     * checks for collisions of an object to the others
     * @param {SpaceObject} object
     * @returns the colliding object
     */
    static checkCollisionsFor(object) {
        let obj = 0;
        for(let i = 0; i < this.#spaceObjects.length; i++) {
            let other = this.#spaceObjects[i];
            if (object != other && object.isCollidingWith(other)) {
                obj = other;
            }
        }
        return obj;
    }
    /**
     * checks is the object is colliding
     * @returns colliding object
     */
    checkCollisions() {
        return SpaceObject.checkCollisionsFor(this);
    }
    /**
     * checks is the object is inside the bouding radius of other
     * @param {SpaceObject} other
     * @returns true if colliding
     */
    isCollidingWith(other) {
        return this.position.distanceTo(other.position) <= other.getBoundingRadius();
    }
    /**
     * Reposition the object on the other side of the screen
     */
    wrapAround() {
        let boundingRadius = this.getBoundingRadius();
        if(this.position.x-boundingRadius > width) {
            this.position.x = -boundingRadius;
        }
        if(this.position.x+boundingRadius < 0) {
            this.position.x = width+boundingRadius;
        }
        if(this.position.y-boundingRadius > height) {
            this.position.y = -boundingRadius;
        }
        if(this.position.y+boundingRadius < 0) {
            this.position.y = height+boundingRadius;
        }
    }
    /**
     * Update the object position and rotation
     */
    update() {
        this.position = this.position.add(this.velocity);
        this.rotation += this.angolarVelocity;
        this.wrapAround();
    }
    /**
     * Deletes the object
     */
    clear() {
        SpaceObject.removeObject(this.id);
    }
}