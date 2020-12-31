//Work Day Scheduler App

//Helper Functions
const getDayAsNumber = function(){
    return parseInt(dayjs().format('d'));
}

const getHourAsNumber = function(){
    return parseInt(dayjs().format('H'));
}

//Get the day/date and display it
const showCurrentDay = function(){
    const currentDay = document.querySelector('#currentDay');
    currentDay.textContent = dayjs().format("ddd MM-DD-YYYY");
}

showCurrentDay();

//Counts the seconds and shows the updated time and changes the input color
const updateTimeAndColor = setInterval(function(){
    const currentTime = document.querySelector('#currentTime');

    currentTime.textContent = "";
    currentTime.textContent = dayjs().format("h:mm A");

    setInputColor;
},1000)

updateTimeAndColor;

//Store the time and the code to represent what dayJS uses for hours
//Create the elements to show the time, the inputs and save buttons
const hoursArr = [
    {hour: '9AM', code: '9'},
    {hour: '10AM', code: '10'},
    {hour: '11AM', code: '11'},
    {hour: '12PM', code: '12'},
    {hour: '1PM', code: '13'},
    {hour: '2PM', code: '14'},
    {hour: '3PM', code: '15'},
    {hour: '4PM', code: '16'},
    {hour: '5PM', code: '17'}
];

const createHoursInputs = hoursArr.forEach(function(i){
    const hoursWrap = document.querySelector('#hours');
    const hoursItem = document.createElement('div');
    const time = document.createElement('div');
    const inputWrap = document.createElement('div');
    const itemInput = document.createElement('input');
    const inputLabel = document.createElement('label');
    const saveBtn = document.createElement('button');

    time.setAttribute('class', 'hours__time')
    time.textContent = i.hour;

    itemInput.type = 'text';
    itemInput.id = 'input' + i.code;
    itemInput.setAttribute('class', 'hours__input');
    itemInput.setAttribute('data-hr', i.code);

    inputLabel.setAttribute('for', itemInput.id);
    inputLabel.setAttribute('class', 'hours__input_label');
    inputLabel.textContent = 'Enter text here';

    inputWrap.setAttribute('class', 'hours__input_wrap');
    inputWrap.appendChild(inputLabel);
    inputWrap.appendChild(itemInput);

    saveBtn.id = 'btn' + i.code;
    saveBtn.setAttribute('class', 'saveBtn btn');
    saveBtn.textContent = 'Save Item';
    saveBtn.type = 'button';

    hoursItem.id = 'hour' + i.code;
    hoursItem.setAttribute('class', 'hours__item');
    hoursItem.appendChild(time);
    hoursItem.appendChild(inputWrap);
    hoursItem.appendChild(saveBtn);

    hoursWrap.appendChild(hoursItem);
});

createHoursInputs;

//Get all of the inputs
const hoursInputs = document.querySelectorAll('.hours__input');

//Compare the data-hr attribute on each input to the current hour
//Conditionally set the background color
const setInputColor = hoursInputs.forEach(function(input){
    const currentHour = parseInt(dayjs().format('H'));
    const dataHr = parseInt(input.getAttribute('data-hr'));
    const parentEl = input.parentElement;

    if (dataHr === currentHour){
        parentEl.classList.add('current');
    } else {
        parentEl.classList.remove('current');
    }

    if (dataHr < currentHour){
        parentEl.classList.add('past');
    } else {
        parentEl.classList.remove('past');
    }

    if(dataHr > currentHour){
        parentEl.classList.add('future');
    } else {
        parentEl.classList.remove('future');
    }
});

//Function to add item to local storage
//Set up click handlers for save buttons
//Pass in the storeItem function when saved button is clicked
const storeItem = function(el){
    if (el.value.length < 1) return;

    const data = {
        todo: el.value,
        daySaved: parseInt(dayjs().format('d'))
    }

    localStorage.setItem('todo' + el.id, JSON.stringify(data));
}

document.addEventListener('click', function(event){
    if (event.target.id === 'btn9'){
        const input9 = document.querySelector('#input9');
        storeItem(input9);
    }

    if (event.target.id === 'btn10'){
        const input10 = document.querySelector('#input10');
        storeItem(input10);
    }

    if (event.target.id === 'btn11'){
        const input11 = document.querySelector('#input11');
        storeItem(input11);
    }

    if (event.target.id === 'btn12'){
        const input12 = document.querySelector('#input12');
        storeItem(input12);
    }

    if (event.target.id === 'btn13'){
        const input13 = document.querySelector('#input13');
        storeItem(input13);
    }

    if (event.target.id === 'btn14'){
        const input14 = document.querySelector('#input14');
        storeItem(input14);
    }

    if (event.target.id === 'btn15'){
        const input15 = document.querySelector('#input15');
        storeItem(input15);
    }

    if (event.target.id === 'btn16'){
        const input16 = document.querySelector('#input16');
        storeItem(input16);
    }

    if (event.target.id === 'btn17'){
        const input17 = document.querySelector('#input17');
        storeItem(input17);
    }
});

//Functions to check if the data is still good 
//and if not remove the data from local storage
const dataExpired = function(d){
    if (!d || !d.todo || !d.daySaved) return false;

    const dayCurrent = getDayAsNumber();

    //should return true or false
    return dayCurrent > d.daySaved;
}

const getData = function(el){
    const storedData = JSON.parse(localStorage.getItem('todo' + el.id));
    
    return storedData;
}

const clearStoredData = hoursInputs.forEach(function(input){
    const data = getData(input);
    if (dataExpired(data)){
        localStorage.removeItem('todo' + input.id);
        input.value = '';
    }
});

clearStoredData;