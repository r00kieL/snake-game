/** @type {HTMLgameCanvasElement} */

import { config } from "./tools/configs/globalConfig.js";
import { drawGrid } from "./tools/drawGrid.js";
import { setupDirectionListener } from "./tools/setupDirectionListener.js";
import { startGame } from "./tools/game/startGame.js";
import { pauseGame } from "./tools/game/pauseGame.js";
import { restartGame } from "./tools/game/restartGame.js";

// 初始化
drawGrid(config.bgCanvas);
// 监听方向输入
setupDirectionListener();
document.querySelector('.start-btn').addEventListener('click', startGame);
document.querySelector('.pause-btn').addEventListener('click', pauseGame);
document.querySelector('.reset-btn').addEventListener('click', restartGame);

// 运行游戏
// setInterval(tick, 300);