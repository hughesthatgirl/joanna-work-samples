//TODO: 
// Need to display current day, and date (this will get updated on page load by dayJS);
// Need to store the current hour so that we can compare to the hours in the app and style accordingly
// Need to check every hour to reset the colors
// On page load each day, the app should be cleared of data and local storage should be cleared too


const currentDay = document.querySelector('#currentDay');
const hoursList = document.querySelector('#hours');
const hoursArr = ['8','9', '10', '11', '12', '1', '2', '3', '4', '5']

// dayjs.extend(window.dayjs_plugin_weekday);
// dayjs.extend(window.dayjs_plugin_weekYear);
// dayjs.extend(window.dayjs_plugin_weekOfYear);

currentDay.textContent = dayjs().format("ddd MM-DD-YYYY");

// const getHour = function(time){
//     return dayjs().hour(time);
// }

// hoursArr.forEach(function(hour, index){
//     const item = document.createElement('li');
//     item.id = 'hour' + index;
//     item.setAttribute('class', 'hour__item');
//     item.textContent = getHour(index);
//     hoursList.appendChild(item);
// });