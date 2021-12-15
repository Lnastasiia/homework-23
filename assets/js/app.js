
let number = Math.floor(Math.random()*100) + 1;
console.log (number);
let count = 10;

function guessNumber (){

    if (count > 0) {

        let userNum = document.getElementById('myNumber').value;
        userNum = parseInt(userNum);
        let decryptionPlace = document.getElementById('decryptionPlace');

        if (userNum == number) {
            decryptionPlace.innerHTML = 'Поздравляю!!! Вы угадали!!!';
           
            return;
           
        }
        else if (userNum > number) {
            decryptionPlace.innerHTML = 'Ваше число больше моего!';
        }
        else if (userNum < number) {
            decryptionPlace.innerHTML = 'Ваше число меньше моего!';
        }
        count = count - 1;
        document.getElementById('count').innerHTML = count;
    }
    else {
        alert(`Попытки закончились. Вы проиграли! Загаданное число: ${number}`);
        location.reload ();
    }
   
}


