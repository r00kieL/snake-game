import { buttonControl } from "../buttonControl.js";
import { config } from "../configs/globalConfig.js"
import { snakeConfig,origSnakeConfig } from "../configs/snakeConfig.js";
import { resetScore } from "./resetScore.js";

function restartGame() {
    const pauseOverlay = document.querySelector('.pause-overlay');
    pauseOverlay.style.opacity = '0';
    
    clearInterval(config.gameState.timerId);
    config.ctx.clearRect(0, 0, config.gameCanvas.width, config.gameCanvas.height);
    resetScore();

    config.gameState.status = 'idle';

    snakeConfig.body = JSON.parse(JSON.stringify(origSnakeConfig.body));
    snakeConfig.movingDirections = JSON.parse(JSON.stringify(origSnakeConfig.movingDirections));
    buttonControl();
}

export { restartGame}