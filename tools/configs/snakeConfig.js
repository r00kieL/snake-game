const snakeConfig = {
    body: [
        { x: 20, y: 20 }, // 头
        { x: 19, y: 20 },
        { x: 18, y: 20 },
        { x: 17, y: 20 },
        { x: 16, y: 20 }, // 尾
    ],

    movingDirections: {
        "ArrowUp": false,
        "ArrowDown": false,
        "ArrowLeft": false,
        "ArrowRight": true,
    },
}

export { snakeConfig }