import { snakeConfig } from "../configs/snakeConfig.js"

function getNextHead() {
    const currentHead = snakeConfig.body[0];
    const currentArrow = Object.keys(snakeConfig.movingDirections).find(
        key => snakeConfig.movingDirections[key]
    );

    if (currentArrow === "ArrowUp") {
        return { x: currentHead.x, y: currentHead.y - 1 };
    }
    if (currentArrow === "ArrowDown") {
        return { x: currentHead.x, y: currentHead.y + 1 };
    }
    if (currentArrow === "ArrowLeft") {
        return { x: currentHead.x - 1, y: currentHead.y};
    }
    if (currentArrow === "ArrowRight") {
        return { x: currentHead.x + 1, y: currentHead.y};
    }
}

export { getNextHead }