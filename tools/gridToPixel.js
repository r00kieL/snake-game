import { config } from "../config"

function gridToPixel(gridItem) {
    return {
        x: gridItem.x * config.cellSize,
        y: gridItem.y * config.cellSize,
    }
}

export { gridToPixel }