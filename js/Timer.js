/**
 * Timer
 * @author Nicholas Santos Shiden
 * @date 23-04-2023
 */
class Timer {
    constructor(seconds) {
        this.endTime = this.getTime() + seconds;
    }
    isTimeout() {
        return this.getTime() >= this.endTime;
    }
    getTime() {
        return frameCount / getTargetFrameRate();
    }
}