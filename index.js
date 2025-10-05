/** @type {HTMLgameCanvasElement} */

import { config } from "./tools/configs/globalConfig.js";
import { drawGrid } from "./tools/drawGrid.js";
import { setupDirectionListener } from "./tools/setupDirectionListener.js";
import { startGame } from "./tools/game/startGame.js";
import { pauseGame } from "./tools/game/pauseGame.js";
import { restartGame } from "./tools/game/restartGame.js";
import { buttonControl } from "./tools/buttonControl.js";

// 初始化
drawGrid(config.bgCanvas);
// 监听方向输入
setupDirectionListener();
// 给按钮设置监听器
config.btns.startBtn.addEventListener('click', startGame);
config.btns.pauseBtn.addEventListener('click', pauseGame);
config.btns.resetBtn.addEventListener('click', restartGame);

buttonControl();



// TODO 设置按钮的逻辑