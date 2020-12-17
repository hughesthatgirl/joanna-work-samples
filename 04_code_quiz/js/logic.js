var timer = document.querySelector('#time');
var startScreen = document.querySelector('#start-screen');
var questionScreen = document.querySelector('#questions');
var resultScreen = document.querySelector('#end-screen');
var leaderBoard = document.querySelector('#leaderboard');

document.addEventListener('click', function(e){
    if (e.target.id === 'start'){
        startScreen.classList.add('hide');
        questionScreen.classList.remove('hide');
    }

    if (e.target.id === 'submit'){
        resultScreen.classList.add('hide');
        leaderBoard.classList.remove('hide');
    }
})
