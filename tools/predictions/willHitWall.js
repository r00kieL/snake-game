import { config } from "../configs/globalConfig.js"

function willHitWall(nextHead) {
    // 范围：0 ~ 39
    return(
        nextHead.x < 0 ||
        nextHead.x >= config.cols ||
        nextHead.y < 0 ||
        nextHead.y >= config.rows
    )
}

export {willHitWall}