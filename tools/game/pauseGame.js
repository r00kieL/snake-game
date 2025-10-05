import { buttonControl } from "../buttonControl.js";
import { config } from "../configs/globalConfig.js"
import { startGame } from "./startGame.js";

function pauseGame() {
    const pauseOverlay = document.querySelector('.pause-overlay');

    if (config.gameState.status === 'paused') {
        pauseOverlay.style.opacity = '0';

        document.querySelector('.pause-btn').textContent = "pause";
        startGame();
    } else {
        document.querySelector('.pause-btn').textContent = "continue";

        pauseOverlay.style.opacity = '1';

        clearInterval(config.gameState.timerId);
        config.gameState.timerId = null;
        config.gameState.status = 'paused';
        buttonControl();
    }
}

export { pauseGame }