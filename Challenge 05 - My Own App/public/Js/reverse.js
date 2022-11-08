// Function to reverse all of the objects inside the books array
exports.reverseBooks = function(arrOfObjects) {
    let temp, n = arrOfObjects.length;
    for (let i = 0; i < (n / 2); i++) {
        temp = arrOfObjects[i];
        arrOfObjects[i] = arrOfObjects[n-i-1];
        arrOfObjects[n-i-1] = temp;
    }

    return arrOfObjects;
}