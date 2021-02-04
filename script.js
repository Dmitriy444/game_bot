'use strict';
//условие проверки на число
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
//получение рандомного числа
let randomNumber = getRandomInt();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//ввод числа пользователем  
let guess = +prompt('Угадай число от 1 до 100');
//console.log(guess);
function userNumber(guess){
    if (guess > randomNumber) {
        return('Загаданное число меньше');
    } else if (guess < randomNumber) {
        return('Загаданное число больше');
    } else if (guess == randomNumber) {
        return('Поздравляю, Вы угадали!!!');
    }
}

function isNumber(guess){
        if (guess == !isNumber) {
            return('Введите число!');
        } else if (guess == isNumber){
            return('');
        }
    }






console.log(getRandomInt(1, 100));
console.log(userNumber(guess));