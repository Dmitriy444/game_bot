'use strict';

let game = function() {
    

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    //console.log(getRandomInt(1, 100));
    
    //let randomNum = Number(getRandomInt());

    function getNum(){
        
        let question = +prompt('Угадай число от 1 до 100');
        let randomNum = getRandomInt(1, 100);

        if (isNaN(question)) {
            alert('Введите число!');
        getNum();
        } else if (question === randomNum) {
            alert('Поздравляю, Вы угадали!!!');
        } else if (question > 0 && question < randomNum) {
            alert('Загаданное число больше');
        getNum();
        } else if (question === 0) {
            alert('Конец игры.');
        } else if (question < 101 && question > randomNum) {
            alert('Загаданное число меньше');
        getNum();
            } 
            
        
        console.log(typeof question);
        }
        
    getNum();

};
game();