var questions = [
    {
        'question': 'What year was JavaScript invented?',
        'a': '1998',
        'b': '1995',
        'c': '1992'
    },
    {
        'question': 'Which punctuation mark represents the not operator in JavaScript?',
        'a': '!',
        'b': '*',
        'c': '#'
    },
    {
       'question': 'Who is the creator of JavaScript?',
        'a': 'Bill Gates',
        'b': 'Tim Berners Lee',
        'c': 'Brendan Eich'
    },
    {
       'question': 'Which of these is an array?',
        'a': '[1, 2, 3]',
        'b': '{key: value, key: value, key:value}',
        'c': 'function(){};'
    },
    {
        'question': 'What method adds new elements to the end of an array?',
        'a': 'shift',
        'b': 'push',
        'c': 'indexOf'
    }
];

var startScreen = document.querySelector('#start-screen');
var questionScreen = document.querySelector('#questions');
var resultScreen = document.querySelector('#result-screen');
var leaderBoard = document.querySelector('#leaderboard');

//Countdown timer
function startTimer(duration, display) {
	var timer = duration, minutes, seconds;

	setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);
		
		if (minutes < 10) {
			minutes = "0" + minutes;
		} else {
			minutes = minutes;
		}
		
		if (seconds < 10) {
			seconds = "0" + seconds;
		} else {
			seconds = seconds;
		}

		display.textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			timer = 0;

			var score = document.querySelector('#final-score');
			score.textContent = getCorrect();

			questionScreen.classList.add('hide');
			resultScreen.classList.remove('hide');
		}
	}, 1000);
}

//Function to build questions and inputs
function buildQuestions(){
	var questionsContainer = document.querySelector('#questionsContainer');

	for (var i = 0; i < questions.length; i++){

		var slide = document.createElement('div');
		slide.id = 'slide' + (i + 1);
		slide.setAttribute('class', 'slide')
		if (i === 0){
			slide.classList.add('active');
		}
		
		var title = document.createElement('h2');
		title.setAttribute('class', 'section__heading');
		title.textContent = (i + 1) + ': ' + questions[i].question;

		var choicesContainer = document.createElement('div');
		choicesContainer.id = 'container' + (i + 1);
		choicesContainer.classList.add('choices__container');

		var inputA = document.createElement('input');
		inputA.id = 'inputA' + (i + 1);
		inputA.type = 'radio';
		inputA.name = 'choices' + i;
		inputA.value = questions[i].a;
		inputA.classList.add('choices__input');
		var inputB = document.createElement('input');
		inputB.id = 'inputB' + (i + 1);
		inputB.type = 'radio';
		inputB.name = 'choices' + i;
		inputB.value = questions[i].b;
		inputB.classList.add('choices__input');
		var inputC = document.createElement('input');
		inputC.id = 'inputC' + (i + 1);
		inputC.type = 'radio';
		inputC.name = 'choices' + i;
		inputC.value = questions[i].c;
		inputC.classList.add('choices__input');

		var labelA = document.createElement('label');
		labelA.textContent = questions[i].a;
		labelA.setAttribute('for', inputA.id);
		labelA.classList.add('choices__label');
		var labelB = document.createElement('label');
		labelB.textContent = questions[i].b;
		labelB.setAttribute('for', inputB.id);
		labelB.classList.add('choices__label');
		var labelC = document.createElement('label');
		labelC.textContent = questions[i].c;
		labelC.setAttribute('for', inputC.id);
		labelC.classList.add('choices__label');

		choicesContainer.appendChild(inputA);
		choicesContainer.appendChild(labelA);
		choicesContainer.appendChild(inputB);
		choicesContainer.appendChild(labelB);
		choicesContainer.appendChild(inputC);
		choicesContainer.appendChild(labelC);

		slide.appendChild(title);
		slide.appendChild(choicesContainer);
		questionsContainer.appendChild(slide);
	}
}

buildQuestions();

//Functions to show and progress through slides
function showSlide(num) {	
	var nextBtn = document.querySelector('#next');
	var resultBtn = document.querySelector('#showResult');

    slides[currentSlide].classList.remove('active');
    slides[num].classList.add('active');
    currentSlide = num;

    if(currentSlide === slides.length - 1){
		nextBtn.classList.add('btn--disabled');
		resultBtn.classList.remove('btn--disabled');
    }
    else {
		nextBtn.classList.remove('btn--disabled');
		resultBtn.classList.add('btn--disabled');
    }
}

function showNextSlide() {
	showSlide(currentSlide + 1);
}

var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

showSlide(currentSlide);

// Function to get all the checked values
// if they are the correct answer increment the correct counter
function getCorrect(){
	var checked = document.querySelectorAll('input:checked');
	var checkedArray = Array.from(checked);
	var correct = 0;

	if(checkedArray[0].id === 'inputB1'){
		correct += 1;
	}
	if(checkedArray[1].id === 'inputA2'){
		correct += 1;
	}
	if(checkedArray[2].id === 'inputC3'){
		correct += 1;
	}
	if(checkedArray[3].id === 'inputA4'){
		correct += 1;
	}
	if(checkedArray[4].id === 'inputB5'){
		correct += 1;
	}

	return correct;
}

//Click event listeners for all buttons
document.addEventListener('click', function(e){
    if (e.target.id === 'start'){
        startScreen.classList.add('hide');
		questionScreen.classList.remove('hide');

		var totalMins = 60 * 0.25;
		var countdown = document.querySelector('#time');

		startTimer(totalMins, countdown);
	}
	
	if (e.target.id === 'showResult'){
        questionScreen.classList.add('hide');
		resultScreen.classList.remove('hide');

		var score = document.querySelector('#final-score');
		score.textContent = getCorrect();
    }

    if (e.target.id === 'submitScore'){
        resultScreen.classList.add('hide');
        leaderBoard.classList.remove('hide');
    }

    if (e.target.id === 'next'){
        showNextSlide();
    }
})