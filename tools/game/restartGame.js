import { config } from "../configs/globalConfig.js"
import { snakeConfig,origSnakeConfig } from "../configs/snakeConfig.js";

function restartGame() {
    clearInterval(config.gameState.timerId);
    config.ctx.clearRect(0, 0, config.gameCanvas.width, config.gameCanvas.height);

    config.gameState.status = 'idle';

    snakeConfig.body = JSON.parse(JSON.stringify(origSnakeConfig.body));
    snakeConfig.movingDirections = JSON.parse(JSON.stringify(origSnakeConfig.movingDirections));
}

export { restartGame}