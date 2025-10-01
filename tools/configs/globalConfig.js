const config = {
    gameCanvas: document.querySelector(".game-board"),
    bgCanvas: document.querySelector(".bg"),

    canvasWidth: 800,
    canvasHeight: 800,
    cellSize: 20,
}

// 定义行和列数
config.rows = config.canvasHeight / config.cellSize;
config.cols = config.canvasWidth / config.cellSize;

// 设置canvas宽高
config.bgCanvas.width = config.canvasWidth;
config.bgCanvas.height = config.canvasHeight;
config.gameCanvas.width = config.canvasWidth;
config.gameCanvas.height = config.canvasHeight;

export { config };