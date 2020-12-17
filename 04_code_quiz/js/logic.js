var questionsObj = [
    {
        'question': 'Question 1 text',
        'answer1': 'Answer Option 1',
        'answer2': 'Answer Option 2',
        'answer3': 'Answer Option 3'
    },
    {
        'question': 'Question 2 text',
        'answer1': 'Answer Option 1',
        'answer2': 'Answer Option 2',
        'answer3': 'Answer Option 3'
    },
    {
       'question': 'Question 3 text',
        'answer1': 'Answer Option 1',
        'answer2': 'Answer Option 2',
        'answer3': 'Answer Option 3'
    },
    {
       'question': 'Question 4 text',
        'answer1': 'Answer Option 1',
        'answer2': 'Answer Option 2',
        'answer3': 'Answer Option 3'
    },
    {
        'question': 'Question 5 text',
        'answer1': 'Answer Option 1',
        'answer2': 'Answer Option 2',
        'answer3': 'Answer Option 3'
    }
];

var timer = document.querySelector('#time');
var startScreen = document.querySelector('#start-screen');
var questionScreen = document.querySelector('#questions');
var resultScreen = document.querySelector('#end-screen');
var leaderBoard = document.querySelector('#leaderboard');

var currentScreen = 0;

//Function to add text to question screens

function buildQuestion(){
	
}

//Function to show question screens
function showScreen(num) {
    screens[currentScreen].classList.remove('active');
    screens[num].classList.add('active');
    currentScreen = num;

    if(currentScreen === screens.length - 1){
        nextBtn.style.opacity = '0';
    }
    else {
        nextBtn.style.opacity = '1';
    }
}

//Function to progress question screens
function showNextScreen() {
	showScreen(currentScreen + 1);
}

document.addEventListener('click', function(e){
    if (e.target.id === 'start'){
        startScreen.classList.add('hide');
        questionScreen.classList.remove('hide');
    }

    if (e.target.id === 'submit'){
        resultScreen.classList.add('hide');
        leaderBoard.classList.remove('hide');
    }

    if (e.target.id === 'next'){
        showNextScreen();
    }
})