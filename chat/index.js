// --------------레퍼런스-------------------------------------------------------------------------------
const chatsView = document.getElementById('chats');
const typeForm = document.getElementById('type-form');
// ---------------------------------------------------------------------------------------------
const NAME = 'name';
const savedName = localStorage.getItem(NAME);
// ---------------------------------------------------------------------------------------------


import { 
    saveTodo,
    onGetTodo, 
    deleteTodo 
} from './firebase.js'


window.addEventListener('DOMContentLoaded', async () => {

    onGetTodo((querySnapshot) => {
        let html = '';
        querySnapshot.forEach(doc => {
            // const date = new Date();
            // const hr = String(date.getHours()).padStart(2,"0");
            // const mn = String(date.getMinutes()).padStart(2,"0");

            const typeInfo = doc.data();
            html += `
                <div class="single-chat" id="single-chat">
                    <div class="chat-name" id="chat-name">${savedName}</div>
                    <span class="chat-text" id="chat-text">
                    ${typeInfo.text}
                    <span class="delete-btn" data-id="${doc.id}">x</span>
                    </span>
                    
                </div>
                    `
                });
                // <span class="chat-time" id="chat-time">${hr}:${mn}</span>
        chatsView.innerHTML = html;

        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", ({target:{dataset}}) => {
                deleteTodo(dataset.id)
            })
        })

    });
});

typeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const typeInput = typeForm['type-input'];
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth()+1;
    const d = String(date.getDate()).padStart(2,"0");
    const hr = String(date.getHours()).padStart(2,"0");
    const mn = String(date.getMinutes()).padStart(2,"0");
    const sc = String(date.getSeconds()).padStart(2,"0");
    let createTime = y+m+d+hr+mn+sc; 
    const statu = "active";
    saveTodo(typeInput.value,statu,createTime);
    typeForm.reset();
})
