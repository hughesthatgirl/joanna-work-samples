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

// //Function to show question slides
var currentslide = 0;
var slides = document.querySelectorAll('.slide');

function showslide(num) {
    slides[currentslide].classList.remove('active');
    slides[num].classList.add('active');
    currentslide = num;

    if(currentslide === slides.length - 1){
        nextBtn.style.opacity = '0';
    }
    else {
        nextBtn.style.opacity = '1';
    }
}

//Function to progress question slides
function showNextslide() {
	showslide(currentslide + 1);
}

document.addEventListener('click', function(e){
	var startScreen = document.querySelector('#start-screen');
	var questionScreen = document.querySelector('#questions');
	var resultScreen = document.querySelector('#end-screen');
	var leaderBoard = document.querySelector('#leaderboard');

    if (e.target.id === 'start'){
        startScreen.classList.add('hide');
		questionScreen.classList.remove('hide');
		buildQuestions();
    }

    if (e.target.id === 'submit'){
        resultScreen.classList.add('hide');
        leaderBoard.classList.remove('hide');
    }

    if (e.target.id === 'next'){
        showNextScreen();
    }
})