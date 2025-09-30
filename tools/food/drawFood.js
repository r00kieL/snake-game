import { config } from "../configs/globalConfig.js"
import { gridToPixel } from '../gridToPixel.js'

function drawFood(food) {
    const ctx = config.gameCanvas.getContext("2d");
    ctx.fillStyle = "red";
    const pixel = gridToPixel(food)
    ctx.fillRect(pixel.x, pixel.y, config.cellSize, config.cellSize);
}

export { drawFood }