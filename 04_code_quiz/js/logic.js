var questions = [
    {
        'question': 'Question 1 text',
        'a': 'Answer Option 1',
        'b': 'Answer Option 2',
        'c': 'Answer Option 3'
    },
    {
        'question': 'Question 2 text',
        'a': 'Answer Option 1',
        'b': 'Answer Option 2',
        'c': 'Answer Option 3'
    },
    {
       'question': 'Question 3 text',
        'a': 'Answer Option 1',
        'b': 'Answer Option 2',
        'c': 'Answer Option 3'
    },
    {
       'question': 'Question 4 text',
        'a': 'Answer Option 1',
        'b': 'Answer Option 2',
        'c': 'Answer Option 3'
    },
    {
        'question': 'Question 5 text',
        'a': 'Answer Option 1',
        'b': 'Answer Option 2',
        'c': 'Answer Option 3'
    }
];

// var answers = [
//     {
//         'a': 'Answer Option 1',
//         'b': 'Answer Option 2',
//         'c': 'Answer Option 3'
//     },
//     {
//         'a': 'Answer Option 1',
//         'b': 'Answer Option 2',
//         'c': 'Answer Option 3'
//     },
//     {
//         'a': 'Answer Option 1',
//         'b': 'Answer Option 2',
//         'c': 'Answer Option 3'
//     },
//     {
//         'a': 'Answer Option 1',
//         'b': 'Answer Option 2',
//         'c': 'Answer Option 3'
//     },
//     {
//         'a': 'Answer Option 1',
//         'b': 'Answer Option 2',
//         'c': 'Answer Option 3'
//     }
// ];

var timer = document.querySelector('#time');

//Functions to build questions and inputs
var questionsContainer = document.querySelector('#questionsContainer');

function buildQuestions(){
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

//Click event listeners for all buttons
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