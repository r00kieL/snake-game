import { snakeConfig } from "../configs/snakeConfig.js";

function moveSnake() {
    let { x: snakeX, y: snakeY } = snakeConfig.body[0];
    const movingDirections = snakeConfig.movingDirections;

    if (movingDirections["ArrowUp"]) snakeY -= 1;
    if (movingDirections["ArrowDown"]) snakeY += 1;
    if (movingDirections["ArrowLeft"]) snakeX -= 1;
    if (movingDirections["ArrowRight"]) snakeX += 1;

    const newHead = { x: snakeX, y: snakeY };
    snakeConfig.body.unshift(newHead);
    snakeConfig.body.pop();
}

export { moveSnake }