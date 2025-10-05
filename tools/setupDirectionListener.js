// BUG 往下移动的时候同时按下←↑或→上会咬到自己

import { config } from "./configs/globalConfig.js";
import { snakeConfig } from "./configs/snakeConfig.js";

function setupDirectionListener() {
    window.addEventListener("keydown", e => {
        if (config.directionLocked) return;

        const mDirs = snakeConfig.movingDirections;

        if (e.key === "ArrowUp" && mDirs.ArrowDown) return;
        if (e.key === "ArrowDown" && mDirs.ArrowUp) return;
        if (e.key === "ArrowLeft" && mDirs.ArrowRight) return;
        if (e.key === "ArrowRight" && mDirs.ArrowLeft) return;

        for (let mDir in mDirs) {
            mDirs[mDir] = false;
        }
        mDirs[e.key] = true;

        config.directionLocked = true;
    });
}

export { setupDirectionListener }