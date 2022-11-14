// --------------레퍼런스-------------------------------------------------------------------------------
const printView = document.getElementById('print-view');
const clForm = document.getElementById('cl-form');
// ---------------------------------------------------------------------------------------------


import { 
    savecl,
    onGetcl, 
    deletecl 
} from './firebase.js'


window.addEventListener('DOMContentLoaded', async () => {

    onGetCL((querySnapshot) => {
        let html = '';
        querySnapshot.forEach(doc => {
            const clInfo = doc.data();
            html += `
                <div class="single-cl-container">
                <span>${clInfo.text}</span>
                <button class="delete-btn" data-id="${doc.id}">Delete</button>
                </div>
            `
        });
        printView.innerHTML = html;

        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", ({target:{dataset}}) => {
                deleteCL(dataset.id)
            })
        })

    });
});

clForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const clInput = clForm['cl-input']
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth()+1;
    const d = String(date.getDate()).padStart(2,"0");
    const hr = String(date.getHours()).padStart(2,"0");
    const mn = String(date.getMinutes()).padStart(2,"0");
    const sc = String(date.getSeconds()).padStart(2,"0");
    let createTime = y+m+d+hr+mn+sc; 
    const statu = "active";
    saveCL(clInput.value,statu,createTime);
    clForm.reset();
})
