import { config } from "./configs/globalConfig.js";

function buttonControl() {
    if (config.gameState.status === "idle") {
        config.btns.startBtn.disabled = false;
        config.btns.pauseBtn.disabled = true;
        config.btns.resetBtn.disabled = true;
    }

    if (config.gameState.status === "running") {
        config.btns.startBtn.disabled = true;
        config.btns.pauseBtn.disabled = false;
        config.btns.resetBtn.disabled = false;
    }

    if (config.gameState.status === "paused") {
        config.btns.startBtn.disabled = true;
        config.btns.pauseBtn.disabled = false;
        config.btns.resetBtn.disabled = false;
    }
}

export { buttonControl }