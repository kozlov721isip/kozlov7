"use strict";
function test() {
    let num = 0;

    return function() {
        num += 1;
        return num;
    }
}

let func = test();

console.log(func());  // Вывод: 1
console.log(func());  // Вывод: 2
console.log(func());  // Вывод: 3
