/*Given an array get the depth of it*/
function arrayDepth(arr) {
    if (Array.isArray(arr)) {
        return 1 + Math.max(...arr.map(arrayDepth))
    } else {
        return 0;
    }
}

console.log(arrayDepth([1, 2, [3, 4, [5, 6], 7, [8, [9, 91]], 10], 11, 12]))