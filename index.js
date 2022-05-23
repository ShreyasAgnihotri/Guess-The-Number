'use strict';

function generateRandom() {
let random_number = Math.floor((Math.random() * 20) + 1);
// console.log(random_number);
return random_number;
}
let random_number = generateRandom();
document.querySelector('.check').addEventListener('click',function ()
{
    let number = document.querySelector('.guess').value;
    // console.log(number);
    let score = document.querySelector('.score').textContent;
    if(random_number == number) {
        document.querySelector('.message').textContent = "Correct Guess!";   
        document.querySelector('.number').textContent = random_number;
        document.querySelector('.highscore').textContent = score;   
        document.body.style.backgroundColor = ' #208a00';     
    }
    else{
        score--;
        document.querySelector('.score').textContent = score;
        if(number < random_number)
        {
            document.querySelector('.message').textContent = "Too Low!";
        }
        else{
            document.querySelector('.message').textContent = "Too High!";
        }
    }    
})

document.querySelector('.again').addEventListener('click',function ()
{
    random_number = generateRandom();
    document.body.style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = "Start Guessing!";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";

})