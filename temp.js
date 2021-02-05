'use strict';

let game = function() {
    let randomNum = getRandomInt();
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    console.log(getRandomInt(50, 50));

    console.log(typeof randomNum);

    let question = +prompt('Угадай число от 1 до 100');
    console.log(typeof question);
 
    let isNum = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    function getNum(question){
    if (question != isNum) {
        alert('Введите число!');
     } else if (question == isNum) {

       if (randomNum == question) {
        alert('Поздравляю, Вы угадали!!!');
    } else if (question < randomNum) {
        alert('Загаданное число больше');
        game();
    } else if (question === 0) {
        alert('Конец игры.');
    } else if (question > randomNum) {
        alert('Загаданное число меньше');
        game();
            }
        }
    }
    getNum(question);
};
game();
