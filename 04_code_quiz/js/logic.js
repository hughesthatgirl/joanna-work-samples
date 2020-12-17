var questionsArr = [
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
var questionsContainer = document.querySelector('#questionsContainer');
var resultScreen = document.querySelector('#end-screen');
var leaderBoard = document.querySelector('#leaderboard');

var currentScreen = 0;

function buildQuestions(){
	for (var i = 0; i < questionsArr.length; i++){
		var screen = document.createElement('div');
		screen.id = 'screen' + (i + 1);
		screen.setAttribute('class', 'screen')
		if (i === 0){
			screen.classList.add('active');
		}
		
		var title = document.createElement('h2');
		title.setAttribute('class', 'section__heading');
		title.textContent = (i + 1) + ': ' + questionsArr[i].question;
		
		
		screen.appendChild(title);
		questionsContainer.appendChild(screen);
	}
}

buildQuestions();

// //Function to show question screens
// function showScreen(num) {
//     screens[currentScreen].classList.remove('active');
//     screens[num].classList.add('active');
//     currentScreen = num;

//     if(currentScreen === screens.length - 1){
//         nextBtn.style.opacity = '0';
//     }
//     else {
//         nextBtn.style.opacity = '1';
//     }
// }

// //Function to progress question screens
// function showNextScreen() {
// 	showScreen(currentScreen + 1);
// }

// document.addEventListener('click', function(e){
//     if (e.target.id === 'start'){
//         startScreen.classList.add('hide');
//         questionScreen.classList.remove('hide');
//     }

//     if (e.target.id === 'submit'){
//         resultScreen.classList.add('hide');
//         leaderBoard.classList.remove('hide');
//     }

//     if (e.target.id === 'next'){
//         showNextScreen();
//     }
// })