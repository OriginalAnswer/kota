
const todoList = document.querySelector('#todo-list');

const chatName = document.getElementById('#chat-name');//Single chat 이름
const chatText = document.getElementById('#chat-text');//Single chat 내용
const chatTime = document.getElementById('#chat-time');//Single chat 시간


// const TODOS_KEY = 'check list';
// let todosArr = [];
// const savedTodo = localStorage.getItem(TODOS_KEY);

// if(savedName !== null){
//     const parsedTodos = JSON.parse(savedTodo);
//     todos = parsedTodos;
//     todosArr = todos; //새로고침 해결부분!!!!
//     parsedTodos.forEach(printTodo);
// }
// function saveTodo(){
//     localStorage.setItem(TODOS_KEY, JSON.stringify(todosArr));
// }
// function todoSubmit(e){
//     e.preventDefault();
//     const newchat = todoInput.value;
//     todoInput.value = "";
//     const h = new Date().getHours();
//     const m = new Date().getMinutes();
//     const t = `${h}:${m}`;
//     const newchatObj = {
//         text:newchat,
//         id:Date.now(),
//         time:t
//     }
//     todosArr.push(newtodoObj);
//     printTodo(newtodoObj);
//     saveTodo();
// }

// function printTodo(n){
//     const li = document.createElement('div');
//     li.id = n.id;
//     li.classList.add('li');
//     const ctt = document.createElement('span');
//     const ctm = document.createElement('span');
//     ctt.classList.add('chat-text');
//     ctm.classList.add('chat-time');
//     ctt.innerText = n.text;
    
//     li.appendChild(span);
//     todoList.appendChild(li);
// }

// todoForm.addEventListener('submit', todoSubmit);

const typeForm = document.getElementById('type-form');
const chatView = document.getElementById('chats');
const savedName = localStorage.getItem(NAME);

//이름 내용 시간 when
import { saveChat, printChat }from './firebaseComfig.js';

window.addEventListener('DOMContentLoaded', async () => {
    printChat((querySnapshot) => {
        let html = '';
        querySnapshot.forEach(doc => {
            const chatInfo = doc.data();
            html += `
            <div class="single-chat" id="single-chat">
                <div class="chat-name" id="chat-name">${chatInfo.name}</div>
                <div>
                    <span class="chat-text" id="chat-text">${chatInfo.text}</span>
                    <span class="chat-time" id="chat-time">${chatInfo.time}</span>
                </div>
            </div>
            `
        });
        chatView.innerHTML = html;
    });
});

typeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    //내용
    const text = typeForm['type-input']
    //when
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth()+1;
    const d = String(date.getDate()).padStart(2,"0");
    const hr = String(date.getHours()).padStart(2,"0");
    const mn = String(date.getMinutes()).padStart(2,"0");
    const sc = String(date.getSeconds()).padStart(2,"0");
    let when = y+m+d+hr+mn+sc; 
    //시간
    let time = `${hr}:${mn}`;
    //이름
    const name = savedName;
    saveChat(name,text,time,when);
    todoForm.reset();
})
