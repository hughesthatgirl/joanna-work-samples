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

function buildQuestions(){
	var questionsContainer = document.querySelector('#questionsContainer');

	for (var i = 0; i < questionsArr.length; i++){
		var slide = document.createElement('div');
		slide.id = 'slide' + (i + 1);
		slide.setAttribute('class', 'slide')
		if (i === 0){
			slide.classList.add('active');
		}
		
		var title = document.createElement('h2');
		title.setAttribute('class', 'section__heading');
		title.textContent = (i + 1) + ': ' + questionsArr[i].question;
		
		
		slide.appendChild(title);
		questionsContainer.appendChild(slide);
	}
}

buildQuestions();

// //Function to show question slides
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

//Function to progress question slides
function showNextSlide() {
	showSlide(currentSlide + 1);
}

var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

showSlide(currentSlide);

document.addEventListener('click', function(e){
	var startScreen = document.querySelector('#start-screen');
	var questionScreen = document.querySelector('#questions');
	var resultScreen = document.querySelector('#result-screen');
	var leaderBoard = document.querySelector('#leaderboard');

    if (e.target.id === 'start'){
        startScreen.classList.add('hide');
		questionScreen.classList.remove('hide');
	}
	
	if (e.target.id === 'showResult'){
        questionScreen.classList.add('hide');
		resultScreen.classList.remove('hide');
    }

    if (e.target.id === 'submitScore'){
        resultScreen.classList.add('hide');
        leaderBoard.classList.remove('hide');
    }

    if (e.target.id === 'next'){
        showNextSlide();
    }
})