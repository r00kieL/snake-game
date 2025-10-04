const snakeConfig = {
    body: [
        { x: 20, y: 20 }, // 头
        { x: 19, y: 20 },
        { x: 18, y: 20 },
        { x: 17, y: 20 },
        { x: 16, y: 20 },
        { x: 15, y: 20 },
        { x: 14, y: 20 },
        { x: 13, y: 20 },
        { x: 12, y: 20 },
        { x: 11, y: 20 },
        { x: 10, y: 20 }, //尾
    ],

    movingDirections: {
        "ArrowUp": false,
        "ArrowDown": false,
        "ArrowLeft": false,
        "ArrowRight": true,
    },
}

const origSnakeConfig = JSON.parse(JSON.stringify(snakeConfig));

export { snakeConfig, origSnakeConfig }