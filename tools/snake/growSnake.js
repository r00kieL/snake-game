import { snakeConfig } from "../configs/snakeConfig.js";
import { config } from "../configs/globalConfig.js";

function growSnake() {
    const step = config.cellSize;
    let { x: snakeX, y: snakeY } = snakeConfig.body[0];
    const movingDirections = snakeConfig.movingDirections;

    if (movingDirections["ArrowUp"]) snakeY -= step;
    if (movingDirections["ArrowDown"]) snakeY += step;
    if (movingDirections["ArrowLeft"]) snakeX -= step;
    if (movingDirections["ArrowRight"]) snakeX += step;

    const newHead = { x: snakeX, y: snakeY };
    snakeConfig.body.unshift(newHead);
}

export { growSnake }