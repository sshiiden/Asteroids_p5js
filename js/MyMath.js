/**
 * Math library
 * @author Nicholas Santos Shiden
 * @date 23-04-2023
 */
class MyMath {
    /**
     * Returns a number between min and max
     * @param {Number} min
     * @param {Number} max
     * @returns A number between min and max
     */
    static randRange(min, max) {
        return Math.random() * (max - min) + min;
    }
}