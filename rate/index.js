// --------------레퍼런스-------------------------------------------------------------------------------
const view1 = document.getElementById('1v');
const view2 = document.getElementById('2v');
const view3 = document.getElementById('3v');
const view4 = document.getElementById('4v');
const view5 = document.getElementById('5v');
const view6 = document.getElementById('6v');
const form1 = document.getElementById('1-type-form');
const form2 = document.getElementById('2-type-form');
const form3 = document.getElementById('3-type-form');
const form4 = document.getElementById('4-type-form');
const form5 = document.getElementById('5-type-form');
const form6 = document.getElementById('6-type-form');
// ---------------------------------------------------------------------------------------------
const NAME = 'name';
const savedName = localStorage.getItem(NAME);
// ---------------------------------------------------------------------------------------------


import { 
    saveRate1,getRate1,deleteRate1,
    saveRate2,getRate2,deleteRate2,
    saveRate3,getRate3,deleteRate3,
    saveRate4,getRate4,deleteRate4,
    saveRate5,getRate5,deleteRate5,
    saveRate6,getRate6,deleteRate6
} from './firebase.js'


window.addEventListener('DOMContentLoaded', async () => {
//---------------------------------------------------------------------------------------------
    getRate1((querySnapshot) => {
        let html = '';
        querySnapshot.forEach(doc => {
            const typeInfo1 = doc.data();
            html += `
                <div class="single-rate" id="single-rate">
                    <span class="rate-text" id="rate-text">${typeInfo1.text}<span class="delete-btn" data-id="${doc.id}">${savedName}</span></span>
                </div>
                    `
                });
            view1.innerHTML = html;

        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", ({target:{dataset}}) => {
                deleteRate1(dataset.id)
            })
        })
    });
    form1.addEventListener('submit', (e) => {
        e.preventDefault()
        const input1 = form1['1-type-input'];
        const date = new Date();
        const y = date.getFullYear();
        const m = date.getMonth()+1;
        const d = String(date.getDate()).padStart(2,"0");
        const hr = String(date.getHours()).padStart(2,"0");
        const mn = String(date.getMinutes()).padStart(2,"0");
        const sc = String(date.getSeconds()).padStart(2,"0");
        let createTime = y+m+d+hr+mn+sc; 
        const statu = "active";
        saveRate1(input1.value,statu,createTime);
        form1.reset();
    })
//---------------------------------------------------------------------------------------------
    getRate2((querySnapshot) => {
        let html = '';
        querySnapshot.forEach(doc => {
            const typeInfo2 = doc.data();
            html += `
            <div class="single-rate" id="single-rate">
            <span class="rate-text" id="rate-text">${typeInfo2.text}<span class="delete-btn" data-id="${doc.id}">${savedName}</span></span>
        </div>
                    `
                });
            view2.innerHTML = html;

        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", ({target:{dataset}}) => {
                deleteRate2(dataset.id)
            })
        })
    });
    form2.addEventListener('submit', (e) => {
        e.preventDefault()
        const input2 = form2['2-type-input'];
        const date = new Date();
        const y = date.getFullYear();
        const m = date.getMonth()+1;
        const d = String(date.getDate()).padStart(2,"0");
        const hr = String(date.getHours()).padStart(2,"0");
        const mn = String(date.getMinutes()).padStart(2,"0");
        const sc = String(date.getSeconds()).padStart(2,"0");
        let createTime = y+m+d+hr+mn+sc; 
        const statu = "active";
        saveRate2(input2.value,statu,createTime);
        form5.reset();
    })
//---------------------------------------------------------------------------------------------
    getRate3((querySnapshot) => {
        let html = '';
        querySnapshot.forEach(doc => {
            const typeInfo3 = doc.data();
            html += `
                <div class="single-rate" id="single-rate">
                    <span class="rate-text" id="rate-text">
                    ${typeInfo3.text}
                    <span class="delete-btn" data-id="${doc.id}">
                    ${savedName}</span></span>
                </div>
                    `
                });
            view3.innerHTML = html;

        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", ({target:{dataset}}) => {
                deleteRate3(dataset.id)
            })
        })
    });
    form3.addEventListener('submit', (e) => {
        e.preventDefault()
        const input3 = form3['3-type-input'];
        const date = new Date();
        const y = date.getFullYear();
        const m = date.getMonth()+1;
        const d = String(date.getDate()).padStart(2,"0");
        const hr = String(date.getHours()).padStart(2,"0");
        const mn = String(date.getMinutes()).padStart(2,"0");
        const sc = String(date.getSeconds()).padStart(2,"0");
        let createTime = y+m+d+hr+mn+sc; 
        const statu = "active";
        saveRate3(input3.value,statu,createTime);
        form3.reset();
    })
//---------------------------------------------------------------------------------------------
    getRate4((querySnapshot) => {
        let html = '';
        querySnapshot.forEach(doc => {
            const typeInfo4 = doc.data();
            html += `
                <div class="single-rate" id="single-rate">
                    <span class="rate-text" id="rate-text">
                    ${typeInfo4.text}<span class="delete-btn" data-id="${doc.id}">${savedName}</span></span>
                </div>
                    `
                });
            view4.innerHTML = html;

        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", ({target:{dataset}}) => {
                deleteRate4(dataset.id)
            })
        })
    });
    form4.addEventListener('submit', (e) => {
        e.preventDefault()
        const input4 = form4['4-type-input'];
        const date = new Date();
        const y = date.getFullYear();
        const m = date.getMonth()+1;
        const d = String(date.getDate()).padStart(2,"0");
        const hr = String(date.getHours()).padStart(2,"0");
        const mn = String(date.getMinutes()).padStart(2,"0");
        const sc = String(date.getSeconds()).padStart(2,"0");
        let createTime = y+m+d+hr+mn+sc; 
        const statu = "active";
        saveRate4(input4.value,statu,createTime);
        form4.reset();
    })
//---------------------------------------------------------------------------------------------
    getRate5((querySnapshot) => {
        let html = '';
        querySnapshot.forEach(doc => {
            const typeInfo5 = doc.data();
            html += `
                <div class="single-rate" id="single-rate">
                    <span class="rate-text" id="rate-text">${typeInfo5.text}<span class="delete-btn" data-id="${doc.id}">${savedName}</span></span>
                </div>
                    `
                });
            view5.innerHTML = html;

        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", ({target:{dataset}}) => {
                deleteRate5(dataset.id)
            })
        })
    });
    form5.addEventListener('submit', (e) => {
        e.preventDefault()
        const input5 = form5['5-type-input'];
        const date = new Date();
        const y = date.getFullYear();
        const m = date.getMonth()+1;
        const d = String(date.getDate()).padStart(2,"0");
        const hr = String(date.getHours()).padStart(2,"0");
        const mn = String(date.getMinutes()).padStart(2,"0");
        const sc = String(date.getSeconds()).padStart(2,"0");
        let createTime = y+m+d+hr+mn+sc; 
        const statu = "active";
        saveRate5(input5.value,statu,createTime);
        form5.reset();
    })
//---------------------------------------------------------------------------------------------
    getRate6((querySnapshot) => {
        let html = '';
        querySnapshot.forEach(doc => {
            const typeInfo6 = doc.data();
            html += `
                <div class="single-rate" id="single-rate">
                    <span class="rate-text" id="rate-text">${typeInfo6.text}<span class="delete-btn" data-id="${doc.id}">${savedName}</span></span>
                </div>
                    `
                });
            view6.innerHTML = html;

        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", ({target:{dataset}}) => {
                deleteRate6(dataset.id)
            })
        })
    });
});

form6.addEventListener('submit', (e) => {
    e.preventDefault()
    const input6 = form6['6-type-input'];
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth()+1;
    const d = String(date.getDate()).padStart(2,"0");
    const hr = String(date.getHours()).padStart(2,"0");
    const mn = String(date.getMinutes()).padStart(2,"0");
    const sc = String(date.getSeconds()).padStart(2,"0");
    let createTime = y+m+d+hr+mn+sc; 
    const statu = "active";
    saveRate6(input6.value,statu,createTime);
    form6.reset();
})
