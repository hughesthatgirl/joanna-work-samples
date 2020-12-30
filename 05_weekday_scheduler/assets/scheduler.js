//TODO: 
// Need to display current day, and date (this will get updated on page load by dayJS);
// Need to store the current hour so that we can compare to the hours in the app and style accordingly
// Need to check every hour to reset the colors
// On page load each day, the app should be cleared of data and local storage should be cleared too

// dayjs.extend(window.dayjs_plugin_weekday);
// dayjs.extend(window.dayjs_plugin_weekYear);
// dayjs.extend(window.dayjs_plugin_weekOfYear);

const currentDay = document.querySelector('#currentDay');
currentDay.textContent = dayjs().format("ddd MM-DD-YYYY");

//Counts the seconds and shows the updated time
const updateTime = setInterval(function(){
    const currentTime = document.querySelector('#currentTime');

    currentTime.textContent = "";
    currentTime.textContent = dayjs().format("h:mm a");
},1000)

updateTime;

//Store the time and the code dayJS uses for hours
const hoursArr = [
    {hour: '9AM', code: 9},
    {hour: '10AM', code: 10},
    {hour: '11AM', code: 11},
    {hour: '12PM', code: 12},
    {hour: '1PM', code: 13},
    {hour: '2PM', code: 14},
    {hour: '3PM', code: 15},
    {hour: '4PM', code: 16},
    {hour: '5PM', code: 17},
];

//Create the elements to show the time, the inputs and save buttons
const createHoursInputs = hoursArr.forEach(function(input){
    const hoursWrap = document.querySelector('#hours');
    const item = document.createElement('div');
    const time = document.createElement('div');
    const inputWrap = document.createElement('div');
    const itemInput = document.createElement('input');
    const inputLabel = document.createElement('label');
    const saveBtn = document.createElement('button');

    time.setAttribute('class', 'hours__time')
    time.textContent = input.hour;

    itemInput.type = 'text';
    itemInput.id = 'input' + input.code;
    itemInput.setAttribute('class', 'hours__input');

    inputLabel.setAttribute('for', itemInput.id);
    inputLabel.setAttribute('class', 'hours__input_label');
    inputLabel.textContent = 'Enter text here';

    inputWrap.setAttribute('class', 'hours__input_wrap');
    inputWrap.appendChild(inputLabel);
    inputWrap.appendChild(itemInput);

    saveBtn.setAttribute('class', 'saveBtn btn');
    saveBtn.textContent = 'Save Item';

    item.id = 'hour' + input.code;
    item.setAttribute('class', 'hours__item');
    item.appendChild(time);
    item.appendChild(inputWrap);
    item.appendChild(saveBtn);

    hoursWrap.appendChild(item);
});

createHoursInputs;

console.log(dayjs().format('H'));