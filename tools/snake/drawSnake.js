import { config } from "../configs/globalConfig.js";
import { snakeConfig } from "../configs/snakeConfig.js";
import { gridToPixel } from "../gridToPixel.js";

function drawSnake() {
    const ctx = config.gameCanvas.getContext("2d");
    const head = snakeConfig.body[0];

    for (let block of snakeConfig.body) {
        const pixel = gridToPixel(block);
        block === head ? ctx.fillStyle = "#000000" : ctx.fillStyle = "#444444";
        ctx.fillRect(pixel.x, pixel.y, 20, 20);
    }
}

export { drawSnake }