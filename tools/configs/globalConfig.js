const config = {
    gameCanvas: document.querySelector("#gameBoard"),
    bgCanvas: document.querySelector("#bg"),

    canvasWidth: 800,
    canvasHeight: 800,
    cellSize: 20,
}

config.rows = config.canvasHeight / config.cellSize;
config.cols = config.canvasWidth / config.cellSize;

config.gameCanvas.width = config.canvasWidth;
config.gameCanvas.height = config.canvasHeight;
config.bgCanvas.width = config.canvasWidth;
config.bgCanvas.height = config.canvasHeight;

export { config };