import { config } from "../configs/globalConfig.js";
import { snakeConfig } from "../configs/snakeConfig.js";

function drawSnake() {
    const ctx = config.gameCanvas.getContext("2d");
    ctx.fillStyle = "black";

    for (let block of snakeConfig.body){
        ctx.fillRect(block.x, block.y, 20, 20);
    }
}

export { drawSnake }