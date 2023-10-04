"use strict";
let counter = (function() {
    let count = 10;
    return function() {
        count--;
        console.log(count);
    }
})();

counter(); // выводит 9
counter(); // выводит 8
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();


