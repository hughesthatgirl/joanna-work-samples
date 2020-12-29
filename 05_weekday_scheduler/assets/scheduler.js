const currentDay = document.querySelector('#currentDay');
const dayList = document.querySelector('#days');
const weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

dayjs.extend(window.dayjs_plugin_weekday);
dayjs.extend(window.dayjs_plugin_weekYear);
dayjs.extend(window.dayjs_plugin_weekOfYear);

currentDay.textContent = dayjs().format("MM-DD-YYYY");

const getDay = function(num){
    return dayjs().day(num)
}

weekDays.forEach(function(day, index){
    const item = document.createElement('li');
    item.textContent = getDay(index);
    dayList.appendChild(item);
});