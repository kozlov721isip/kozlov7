"use strict";
let arr = [1, 2, 3, 4, 5];

function printArrayElements(array) {
    if (array.length === 0) {
        return;
    }

    console.log(array[0]);
    printArrayElements(array.slice(1));
}

printArrayElements(arr);
