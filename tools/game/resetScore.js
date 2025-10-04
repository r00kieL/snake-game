import { config } from "../configs/globalConfig.js"

function resetScore() {
    config.score = 0;
    document.querySelector('.score').textContent = config.score;  
}

export { resetScore }