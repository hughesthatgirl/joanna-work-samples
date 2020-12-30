//TODO: 
// Need to display current day, and date (this will get updated on page load by dayJS);
// Need to store the current hour so that we can compare to the hours in the app and style accordingly
// Need to check every hour to reset the colors
// On page load each day, the app should be cleared of data and local storage should be cleared too

const currentDay = document.querySelector('#currentDay');
currentDay.textContent = dayjs().format("ddd MM-DD-YYYY");

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

    hoursItem.id = 'hour' + i.code;
    hoursItem.setAttribute('class', 'hours__item');
    hoursItem.appendChild(time);
    hoursItem.appendChild(inputWrap);
    hoursItem.appendChild(saveBtn);

    hoursWrap.appendChild(hoursItem);
});

createHoursInputs;

//Get all of the inputs
//Compare the data-hr attribute on each input to the current hour
//Conditionally set the background color
const hoursInputs = document.querySelectorAll('.hours__input');

const setInputColor = hoursInputs.forEach(function(input){
    const currentHour = parseInt(dayjs().format('H'));
    const dataHr = parseInt(input.getAttribute('data-hr'));
    const parentEl = input.parentElement.parentElement;

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
const storeItem = function(el){
    if (el.value.length < 1) return;

    const data = {
        todo: el.value,
        timeSaved: dayjs().format("h:mm:ss A")
    }

    localStorage.setItem('todo' + el.id, JSON.stringify(data));
}

//Function to remove item to local storage
const removeItem = function(el){
    localStorage.removeItem('todo' + el.id);
}

//Set up click handlers for save buttons
document.addEventListener('click', function(event){
    if (event.target.id === 'btn9'){
        const input9 = document.querySelector('#input9');
        storeItem(input9);
        console.log(`clicked: ${input9.id}`);
    }

    if (event.target.id === 'btn10'){
        const input10 = document.querySelector('#input10');
        storeItem(input10);
        console.log(`clicked: ${input10.id}`);
    }

    if (event.target.id === 'btn11'){
        const input11 = document.querySelector('#input11');
        storeItem(input11);
        console.log(`clicked: ${input11.id}`);
    }

    if (event.target.id === 'btn12'){
        const input12 = document.querySelector('#input12');
        storeItem(input12);
        console.log(`clicked: ${input12.id}`);
    }

    if (event.target.id === 'btn13'){
        const input13 = document.querySelector('#input13');
        storeItem(input13);
        console.log(`clicked: ${input13.id}`);
    }

    if (event.target.id === 'btn14'){
        const input14 = document.querySelector('#input14');
        storeItem(input14);
        console.log(`clicked: ${input14.id}`);
    }

    if (event.target.id === 'btn15'){
        const input15 = document.querySelector('#input15');
        storeItem(input15);
        console.log(`clicked: ${input15.id}`);
    }

    if (event.target.id === 'btn16'){
        const input16 = document.querySelector('#input16');
        storeItem(input16);
        console.log(`clicked: ${input16.id}`);
    }

    if (event.target.id === 'btn17'){
        const input17 = document.querySelector('#input17');
        storeItem(input17);
        console.log(`clicked: ${input17.id}`);
    }
});