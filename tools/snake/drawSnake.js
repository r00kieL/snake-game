import { config } from "../configs/globalConfig.js";
import { snakeConfig } from "../configs/snakeConfig.js";
import { gridToPixel } from "../gridToPixel.js";

function drawSnake() {
    const ctx = config.gameCanvas.getContext("2d");
    ctx.fillStyle = "black";

    for (let block of snakeConfig.body) {
        const pixel = gridToPixel(block)
        ctx.fillRect(pixel.x, pixel.y, 20, 20);
    }
}

export { drawSnake }