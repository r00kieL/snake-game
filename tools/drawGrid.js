import { config } from "./configs/globalConfig.js";

function drawGrid(canvas) {
    const ctx = canvas.getContext("2d");

    // 画横线
    for (let r = 0; r <= config.rows; r++) {
        let y = r * config.cellSize;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(config.canvasWidth, y);
        ctx.stroke();
    }

    // 画竖线
    for (let c = 0; c <= config.cols; c++) {
        let x = c * config.cellSize;

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, config.canvasHeight);
        ctx.stroke();
    }
}

export { drawGrid };