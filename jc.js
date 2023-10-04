"use strict";
let counter = (function() {
    let count = 10;
    return function() {
        if (count > 0) {
            count--;
            console.log(count);
        } else {
            console.log('Отсчет окончен');
        }
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
counter(); // выводит 0
counter(); // выводит 'Отсчет окончен'

