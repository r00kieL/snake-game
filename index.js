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
import { willEatFood } from "./tools/predictions/willEatFood.js"
import { willEatOneself } from "./tools/predictions/willEatOneself.js";

const ctx = config.gameCanvas.getContext("2d");

// 初始化
let food = null;
drawGrid(config.bgCanvas);
setupDirectionListener();

setInterval(() => {
    // 判断场上是否有食物
    if (!food) food = createFood();
    const nextHead = getNextHead(snakeConfig.body[0]);

    // 判断是否撞到墙
    if (willHitWall(nextHead)) {
        return;
    }
    // 判断是否吃到自己
    if (willEatOneself(nextHead)) {
        return;
    }
    // 判断是否吃到食物
    if (willEatFood(nextHead, food)) {
        growSnake();
        food = createFood();
    } else {
        moveSnake();
    }

    ctx.clearRect(0, 0, config.gameCanvas.width, config.gameCanvas.height);
    drawFood(food);
    drawSnake();
}, 300)