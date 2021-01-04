//Work Day Scheduler App

//Helper Functions
const getDate = function(){
    return dayjs().format("ddd MM-DD-YYYY");
}

const getHourAsNumber = function(){
    return parseInt(dayjs().format('H'));
}

//Get the day/date and display it
const showCurrentDay = function(){
    const currentDay = document.querySelector('#currentDay');

    currentDay.textContent = "";
    currentDay.textContent = getDate();

    return currentDay;
}

//Get the time and display it
const showCurrentTime = function(){
    const currentTime = document.querySelector('#currentTime');

    currentTime.textContent = "";
    currentTime.textContent = dayjs().format("h:mm A");

    return currentTime;
}

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

const createHoursInputs = function(){
    hoursArr.forEach(function(i){
        const hoursWrap = document.querySelector('#hours');
        const hoursItem = document.createElement('div');
        const time = document.createElement('div');
        const inputWrap = document.createElement('div');
        const itemInput = document.createElement('input');
        const inputLabel = document.createElement('label');
        const todoText = document.createElement('p');
        const btnWrap = document.createElement('div');
        const deleteBtn = document.createElement('button');
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

        todoText.id = 'todo' + i.code;
        todoText.setAttribute('class', 'todo__text');
    
        inputWrap.setAttribute('class', 'hours__input_wrap');
        inputWrap.appendChild(inputLabel);
        inputWrap.appendChild(itemInput);
        inputWrap.appendChild(todoText);
    
        saveBtn.id = 'btn' + i.code;
        saveBtn.setAttribute('class', 'saveBtn btn');
        saveBtn.textContent = 'Save Item';
        saveBtn.type = 'button';

        deleteBtn.id = 'delete' + i.code;
        deleteBtn.setAttribute('class', 'deleteBtn btn');
        deleteBtn.textContent = 'Delete Item';
        deleteBtn.type = 'button';

        btnWrap.setAttribute('class', 'btn__wrap');
        btnWrap.appendChild(saveBtn);
        btnWrap.appendChild(deleteBtn);
    
        hoursItem.id = 'hour' + i.code;
        hoursItem.setAttribute('class', 'hours__item');
        hoursItem.appendChild(time);
        hoursItem.appendChild(inputWrap);
        hoursItem.appendChild(btnWrap);
    
        hoursWrap.appendChild(hoursItem);
    });
}

showCurrentDay()
showCurrentTime();
createHoursInputs();

//Counts the seconds and shows the updated time and changes the input color
const updateTimeDayColor = setInterval(function(){
    showCurrentDay()
    showCurrentTime();
    setInputColor();

},1000)

updateTimeDayColor;

//Get all of the inputs
const hoursInputs = document.querySelectorAll('.hours__input');

//Compare the data-hr attribute on each input to the current hour
//Conditionally set the background color
const setInputColor = function(){
    const currentHour = getHourAsNumber();

    for (let i = 0; i < hoursInputs.length; i++){
        const dataHr = parseInt(hoursInputs[i].getAttribute('data-hr'));
        const parentEl = hoursInputs[i].parentElement;

        if (dataHr === currentHour){
            parentEl.classList.add('present');
        } else {
            parentEl.classList.remove('present');
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
    }
}

//Functions to store, get and display items to/from local storage
const storeItem = function(el){
    if (el.value.length < 1) return;

    const data = {
        todo: el.value,
        dateSaved: getDate()
    }

    localStorage.setItem('todo' + el.id, JSON.stringify(data));
}

const getData = function(el){
    const storedData = JSON.parse(localStorage.getItem('todo' + el.id));
    
    return storedData;
}

const displayTodo = function(el, text){
    const todoObj = getData(el);

    text.textContent = 'To Do:' + " " + todoObj.todo;
    el.value = '';
}

const removeTodo = function(el, text){
    const savedTodo = getData(el);

    if(savedTodo == null){
        return;
    } else {
        localStorage.removeItem('todo' + el.id);
        text.textContent = '';
    }
}

const displayTodoOnLoad = function(){
    hoursInputs.forEach(function(input){
        const todoText = input.nextElementSibling;
        
        const savedData = getData(input);

        if(savedData == null){
            return;
        } else {
            displayTodo(input, todoText);
        }
        
    })
}

displayTodoOnLoad();

document.addEventListener('click', function(event){
    //Save Item Buttons
    if (event.target.id === 'btn9'){
        const input9 = document.querySelector('#input9');
        const todo9 = document.querySelector('#todo9');
        storeItem(input9);
        displayTodo(input9, todo9);
    }

    if (event.target.id === 'btn10'){
        const input10 = document.querySelector('#input10');
        const todo10 = document.querySelector('#todo10');
        storeItem(input10);
        displayTodo(input10, todo10);
    }

    if (event.target.id === 'btn11'){
        const input11 = document.querySelector('#input11');
        const todo11 = document.querySelector('#todo11');
        storeItem(input11);
        displayTodo(input11, todo11);
    }

    if (event.target.id === 'btn12'){
        const input12 = document.querySelector('#input12');
        const todo12 = document.querySelector('#todo12');
        storeItem(input12);
        displayTodo(input12, todo12);
    }

    if (event.target.id === 'btn13'){
        const input13 = document.querySelector('#input13');
        const todo13 = document.querySelector('#todo13');
        storeItem(input13);
        displayTodo(input13, todo13);
    }

    if (event.target.id === 'btn14'){
        const input14 = document.querySelector('#input14');
        const todo14 = document.querySelector('#todo14');
        storeItem(input14);
        displayTodo(input14, todo14);
    }

    if (event.target.id === 'btn15'){
        const input15 = document.querySelector('#input15');
        const todo15 = document.querySelector('#todo15');
        storeItem(input15);
        displayTodo(input15, todo15);
    }

    if (event.target.id === 'btn16'){
        const input16 = document.querySelector('#input16');
        const todo16 = document.querySelector('#todo16');
        storeItem(input16);
        displayTodo(input16, todo16);
    }

    if (event.target.id === 'btn17'){
        const input17 = document.querySelector('#input17');
        const todo17 = document.querySelector('#todo17');
        storeItem(input17);
        displayTodo(input17, todo17);
    }

    //Delete Item Buttons
    if (event.target.id === 'delete9'){
        const input9 = document.querySelector('#input9');
        const todo9 = document.querySelector('#todo9');
        removeTodo(input9, todo9);
    }

    if (event.target.id === 'delete10'){
        const input10 = document.querySelector('#input10');
        const todo10 = document.querySelector('#todo10');
        removeTodo(input10, todo10);
    }

    if (event.target.id === 'delete11'){
        const input11 = document.querySelector('#input11');
        const todo11 = document.querySelector('#todo11');
        removeTodo(input11, todo11);
    }

    if (event.target.id === 'delete12'){
        const input12 = document.querySelector('#input12');
        const todo12 = document.querySelector('#todo12');
        removeTodo(input12, todo12);
    }

    if (event.target.id === 'delete13'){
        const input13 = document.querySelector('#input13');
        const todo13 = document.querySelector('#todo13');
        removeTodo(input13, todo13);
    }

    if (event.target.id === 'delete14'){
        const input14 = document.querySelector('#input14');
        const todo14 = document.querySelector('#todo14');
        removeTodo(input14, todo14);
    }

    if (event.target.id === 'delete15'){
        const input15 = document.querySelector('#input15');
        const todo15 = document.querySelector('#todo15');
        removeTodo(input15, todo15);
    }

    if (event.target.id === 'delete16'){
        const input16 = document.querySelector('#input16');
        const todo16 = document.querySelector('#todo16');
        removeTodo(input16, todo16);
    }

    if (event.target.id === 'delete17'){
        const input17 = document.querySelector('#input17');
        const todo17 = document.querySelector('#todo17');
        removeTodo(input17, todo17);
    }
});

//Functions to check if the data should be removed from storage
//if the day that the item was added to storage is different from the current day
//then clear the stored data 
const dataExpired = function(d){
    if (!d || !d.todo || !d.dateSaved) return false;

    const dateCurrent = getDate();

    //if the current date is the same as the date the item was saved
    //then it is not expired (return false); if it's a different date, 
    // then it is expired (return true)
    if (dateCurrent == d.dateSaved){
        return false;
    } else {
        return true;
    }
}

const clearStoredData = function(){
    hoursInputs.forEach(function(input){
        const data = getData(input);
        const todoText = input.nextElementSibling;
        if (dataExpired(data)){
            localStorage.removeItem('todo' + input.id);
            input.value = '';
            todoText.textContent = '';
        }
    });
}

const checkStorage = setInterval(function(){
    clearStoredData();
},1000)

checkStorage;