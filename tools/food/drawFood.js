import { config } from "../configs/globalConfig.js"

function drawFood(food) {
    const ctx = config.gameCanvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * config.cellSize, food.y * config.cellSize, config.cellSize, config.cellSize);
}

export { drawFood }