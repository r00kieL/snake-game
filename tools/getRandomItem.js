function getRandomItem(arr) {
    const itemIndex = Math.floor(Math.random() * arr.length);
    return arr[itemIndex];
}

export { getRandomItem }