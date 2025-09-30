

function wiiEatFood(nextHead, food) {
    return (
        
    );
}

export { wiiEatFood }

// 吃到了食物
if (food.x === snakeConfig.body[0].x && food.y === snakeConfig.body[0].y) {
    growSnake();
    food = null;
} else {
    moveSnake();
}