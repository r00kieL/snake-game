import { snakeConfig } from "../configs/snakeConfig.js"

function willEatOneself(nextHead) {
    return (
        snakeConfig.body.slice(1).some(
            item => item.x === nextHead.x && item.y === nextHead.y
        )
    )
}

export { willEatOneself }