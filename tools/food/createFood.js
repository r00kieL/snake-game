function createFood() {
    const x = Math.floor(Math.random() * 40);
    const y = Math.floor(Math.random() * 40);
    // 参数是格子坐标
    return { x, y };
}

export { createFood }