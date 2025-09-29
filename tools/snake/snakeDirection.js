import { snakeConfig } from "../configs/snakeConfig";

function snakeDirection() {

}

export { snakeConfig }





window.addEventListener("keydown", e => {
    for (let key in keys) {
        keys[key] = false;
    }

    keys[e.key] = true;
});