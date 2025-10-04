import { config } from "../configs/globalConfig.js"

function addScore() {
    config.score++;
    document.querySelector('.score').textContent = config.score;
}

export { addScore }