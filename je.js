"use strict";
let func = (function() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
        if (num > 5) {
            num = 1;
        }
    }
})();

func(); //выведет 1
func(); //выведет 2
func(); //выведет 3
func(); //выведет 4
func(); //выведет 5
func(); //выведет 1
func(); //выведет 2
func(); //выведет 3
func(); //выведет 4
func(); //выведет 5
