/** @type {HTMLgameCanvasElement} */

import { config } from "./tools/configs/globalConfig.js";
import { snakeConfig } from "./tools/configs/snakeConfig.js";
import { drawGrid } from "./tools/drawGrid.js";
import { createFood, drawFood } from './tools/food/index.js'
import { setupDirectionListener } from "./tools/setupDirectionListener.js";
import { moveSnake } from "./tools/snake/moveSnake.js";
import { drawSnake } from "./tools/snake/drawSnake.js";
import { growSnake } from "./tools/snake/growSnake.js";
import { getNextHead } from "./tools/predictions/getNextHead.js";
import { willHitWall } from "./tools/predictions/willHitWall.js";

const ctx = config.gameCanvas.getContext("2d");

// 初始化
let food = null;
drawGrid(config.bgCanvas);
setupDirectionListener();

setInterval(() => {
    // 判断场上是否有食物
    if (!food) food = createFood();
    const nextHead = getNextHead(snakeConfig.body[0]);

    if (willHitWall(nextHead)) return;

    // TODO 判断是吃到食物
    // TODO 判断是否吃到自己

    ctx.clearRect(0, 0, config.gameCanvas.width, config.gameCanvas.height);

    drawFood(food);

    // 吃到了食物
    if (food.x === snakeConfig.body[0].x && food.y === snakeConfig.body[0].y) {
        growSnake();
        food = null;
    } else {
        moveSnake();
    }
    drawSnake();
}, 200)