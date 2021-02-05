'use strict';
//условие проверки на число
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

//получение рандомного числа
let randomNumber = getRandomInt();
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//ввод числа пользователем  
let guess = +prompt('Угадай число от 1 до 100');
//console.log(guess);

function Number(guess){
    if (guess !== isNumber){
        return('введите число!');
    }  else if (guess == isNumber && > randomNumber){
        return('Загаданное число меньше');
    }  else if (guess == isNumber)
}


function userNumber(guess){
    if (guess > randomNumber) {
        return('Загаданное число меньше');
    } else if (guess < randomNumber) {
        return('Загаданное число больше');
    } else if (guess == randomNumber) {
        return('Поздравляю, Вы угадали!!!');
    }
}




    function Number(guess){
        if (guess !== isNumber) {
            return('Введите число!');
        } else if (guess == isNumber){
            return('Это число!');
        }
     }



 /* 
function one() {
    let randomNumber = 50; 
    function Number(guess){
        if (guess != isNumber) {
            return('Введите число!');
        } else if (guess == isNumber){
            return function userNumber(guess){
                        if (guess > randomNumber) {
                            return('Загаданное число меньше');
                        } else if (guess < randomNumber) {
                            return('Загаданное число больше');
                        } else if (guess == randomNumber) {
                                return('Поздравляю, Вы угадали!!!');
                        } else if (guess == null) {
                            return('Игра окончена');
                        }
            }
        }
    }
}
     */   
console.log(getRandomInt(50, 50));
console.log(Number(guess));
//console.log(game());
console.log(userNumber(guess));

/*function game() {
    function start(){
        let randomNumber = 50;
        let guess = +prompt('Угадай число от 1 до 100');
    }
    let isNumber = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    function Number(guess){
        if (guess == null){
            return('Игра окончена.');
        } else if (guess != isNumber){
            return('Введите число!'); 
            start();
        } else if (guess == randomNumber){
            return('Вы выйграли!!!');
        } else if (guess < randomNumber) {
            return('Загаданное число больше');
            start();
        } else if (guess > randomNumber) {
            return('Загаданное число меньше');
            start();
    }

}
console.log(game())
*/