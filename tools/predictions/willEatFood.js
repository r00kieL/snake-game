function willEatFood(nextHead, food) {
    return (
        food.x === nextHead.x && food.y === nextHead.y
    )
}

export { willEatFood }