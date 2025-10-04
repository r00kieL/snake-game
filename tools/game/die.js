import { config } from "../configs/globalConfig.js";
import { getRandomItem } from "../getRandomItem.js";
import { restartGame } from "./restartGame.js";

function die(dieType) {
    if (dieType === "hitWall") {
        const deathWarning = getRandomItem(config.deathWarning.hitWall);
        alert(deathWarning);
    } else if (dieType === "eatOneself") {
        const deathWarning = getRandomItem(config.deathWarning.eatOneself);
        alert(deathWarning);
    }

    restartGame();
}

export { die }