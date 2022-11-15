const todoInput = document.querySelector('#todo-input');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'check list';
let todosArr = [];
const savedTodo = localStorage.getItem(TODOS_KEY);

if(savedTodo !== null){
    const parsedTodos = JSON.parse(savedTodo);
    todos = parsedTodos;
    todosArr = todos; //새로고침 해결부분!!!!
    parsedTodos.forEach(printTodo);
}
function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todosArr));
}
function deleteTodo(e){
    const li = event.target.parentElement;
    li.remove();
    todosArr = todosArr.filter(a => a.id !== parseInt(li.id));
    saveTodo();
}
function todoSubmit(e){
    e.preventDefault();
    const newtodo = todoInput.value;
    todoInput.value = "";
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const t = `${h}:${m}`;
    const newtodoObj = {
        text:newtodo,
        id:Date.now(),
        time:t
    }
    todosArr.push(newtodoObj);
    printTodo(newtodoObj);
    saveTodo();
}

function printTodo(n){
    const li = document.createElement('div');
    li.id = n.id;
    li.classList.add('li');
    const span = document.createElement('span');
    span.innerText = n.text;
    
    li.appendChild(span);
    todoList.appendChild(li);
}

todoForm.addEventListener('submit', todoSubmit);

