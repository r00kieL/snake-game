const config = {
    deathWarning: {
        hitWall: [
            "蛇蛇的头与墙壁融为了一体。",
            "蛇蛇误以为自己是穿墙术大师。",
            "蛇蛇的头与墙壁的接触过于亲密。",
            "蛇蛇误以为这里是九又四分之三站台。",
            "蛇蛇结束了自己的回合，以一种破碎的方式。",
        ],
        eatOneself: [
            "蛇蛇以为自己很好吃。",
            "蛇蛇的身体完成了闭环。",
            "蛇蛇尝到了最熟悉的味道。",
            "蛇蛇的命运在循环中结束了。",
            "蛇蛇画了一个圆(也许没那么圆)，用自己的方式。",
        ]
    },

    gameState: {
        timerId: null,
        status: 'idle', // 可能的值：'idle' | 'running' | 'paused' | 'dead'
    },

    isFood: null,
    score: 0,

    gameCanvas: document.querySelector(".game-board"),
    bgCanvas: document.querySelector(".bg"),

    canvasWidth: 800,
    canvasHeight: 800,
    cellSize: 20,
}

// 获取canvas上下文
config.ctx = config.gameCanvas.getContext("2d");

// 定义行和列数
config.rows = config.canvasHeight / config.cellSize;
config.cols = config.canvasWidth / config.cellSize;

// 设置canvas宽高
config.bgCanvas.width = config.canvasWidth;
config.bgCanvas.height = config.canvasHeight;
config.gameCanvas.width = config.canvasWidth;
config.gameCanvas.height = config.canvasHeight;

export { config };