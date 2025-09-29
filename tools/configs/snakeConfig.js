const snakeConfig = {
    body: [
        { x: 400, y: 400 }, // 头
        { x: 380, y: 400 },
        { x: 360, y: 400 },
        { x: 340, y: 400 },
        { x: 320, y: 400 }, // 尾
    ],

    movingDirections: {
        "ArrowUp": false,
        "ArrowDown": false,
        "ArrowLeft": false,
        "ArrowRight": true,
    },
}

export { snakeConfig }