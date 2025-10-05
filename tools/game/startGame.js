import { buttonControl } from "../buttonControl.js";
import { config } from "../configs/globalConfig.js"
import { tick } from "./tick.js";


function startGame() {
    if (config.gameState.status === "running") return;

    const timeId = setInterval(tick, 150);
    config.gameState.timerId = timeId;
    config.gameState.status = "running";
    buttonControl();
}

export { startGame }