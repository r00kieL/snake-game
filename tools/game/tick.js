import { snakeConfig } from "../configs/snakeConfig.js";
import { createFood, drawFood } from '../food/index.js'
import { moveSnake } from "../snake/moveSnake.js";
import { drawSnake } from "../snake/drawSnake.js";
import { growSnake } from "../snake/growSnake.js";
import { getNextHead } from "../predictions/getNextHead.js";
import { willHitWall } from "../predictions/willHitWall.js";
import { willEatFood } from "../predictions/willEatFood.js"
import { willEatOneself } from "../predictions/willEatOneself.js";
import { config } from "../configs/globalConfig.js";
import { die } from "./die.js";
config

function tick() {
    // 判断场上是否有食物
    if (!config.food) config.food = createFood();
    const nextHead = getNextHead(snakeConfig.body[0]);

    // 判断是否撞到墙
    if (willHitWall(nextHead)) {
        die("hitWall");
        return;
    }
    // 判断是否吃到自己
    if (willEatOneself(nextHead)) {
        die("eatOneself");
        return;
    }
    // 判断是否吃到食物
    if (willEatFood(nextHead, config.food)) {
        growSnake();
        config.food = createFood();
    } else {
        moveSnake();
    }

    config.ctx.clearRect(0, 0, config.gameCanvas.width, config.gameCanvas.height);
    drawFood(config.food);
    drawSnake();
}

export { tick }