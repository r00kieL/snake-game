import { snakeConfig } from "./configs/snakeConfig.js";

function setupDirectionListener() {
    window.addEventListener("keydown", e => {
        const mDirs = snakeConfig.movingDirections;

        if (e.key === "ArrowUp" && mDirs.ArrowDown) return;
        if (e.key === "ArrowDown" && mDirs.ArrowUp) return;
        if (e.key === "ArrowLeft" && mDirs.ArrowRight) return;
        if (e.key === "ArrowRight" && mDirs.ArrowLeft) return;

        for (let mDir in mDirs) {
            mDirs[mDir] = false;
        }
        mDirs[e.key] = true;
    });
}

export { setupDirectionListener }