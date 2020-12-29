const currentDay = document.querySelector('#currentDay');

// currentDay.textContent = dayjs().format("MM-DD-YYYY");;

dayjs.extend(window.dayjs_plugin_weekday);
currentDay.textContent = dayjs().weekday(2);