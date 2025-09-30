import { config } from "./configs/globalConfig.js"

function gridToPixel(gridItem) {
    return {
        x: gridItem.x * config.cellSize,
        y: gridItem.y * config.cellSize,
    }
}

export { gridToPixel }