/** @type {HTMLgameCanvasElement} */

import { config } from "./tools/configs/globalConfig.js";
import { snakeConfig } from "./tools/configs/snakeConfig.js";
import { drawGrid } from "./tools/drawGrid.js";
import { createFood, drawFood } from './tools/food/index.js'
import { setupDirectionListener } from "./tools/setupDirectionListener.js";
import { moveSnake } from "./tools/snake/moveSnake.js";
import { drawSnake } from "./tools/snake/drawSnake.js";
import { growSnake } from "./tools/snake/growSnake.js";

const ctx = config.gameCanvas.getContext("2d");

// 初始化
let food = null;
food = createFood();
drawGrid(config.bgCanvas);
setupDirectionListener();

setInterval(() => {
    ctx.clearRect(0, 0, config.gameCanvas.width, config.gameCanvas.height);

    // 判断场上是否有食物
    if (!food) {
        food = createFood();
    }

    drawFood(food);
    // 吃到了食物
    if (food.x * config.cellSize === snakeConfig.body[0].x && food.y * config.cellSize === snakeConfig.body[0].y) {
        growSnake();
        food = null;
    } else {
        moveSnake();
    }
    drawSnake();
}, 200)